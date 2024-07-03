import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createBar(barData: { nom: string; stocks?: { produit_id: number; quantite: number }[] }) {
    const bar = await prisma.bar.create({
        data: {
            nom: barData.nom,
            stocks: {
                create: barData.stocks?.map(stock => ({
                    produit_id: stock.produit_id,
                    quantite: stock.quantite,
                })),
            },
        },
        include: {
            stocks: true,
            livraisons: true,
        },
    });

    return bar;
}

export async function getBarById(barId: number) {
    return await prisma.bar.findUnique({
        where: { id: barId },
        include: {
            stocks: true,
        },
    });
}

export async function updateBar(barId: number, barData: { nom?: string; stocks?: { produit_id: number; quantite: number }[] }) {
    const updates = barData.stocks?.map(stock =>
        prisma.stock.upsert({
            where: {
                bar_id_produit_id: {
                    bar_id: barId,
                    produit_id: stock.produit_id,
                },
            },
            update: {
                quantite: stock.quantite,
            },
            create: {
                bar_id: barId,
                produit_id: stock.produit_id,
                quantite: stock.quantite,
            },
        })
    );

    await prisma.$transaction(updates || []);

    const bar = await prisma.bar.update({
        where: { id: barId },
        data: {
            nom: barData.nom,
        },
        include: {
            stocks: true,
        },
    });

    return bar;
}

export async function deleteBar(barId: number) {
    return await prisma.bar.delete({
        where: { id: barId },
        include: {
            stocks: true,
        },
    });
}

export async function getBars() {
    return await prisma.bar.findMany({
        include: {
            stocks: true,
        },
    });
}
