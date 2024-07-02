import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createBar(barData: { nom: string }) {
    return await prisma.bar.create({
        data: { nom: barData.nom },
    });
}

export async function getBarById(barId: number) {
    return await prisma.bar.findUnique({
        where: { bar_id: barId },
    });
}

export async function updateBar(barId: number, barData: { nom?: string }) {
    return await prisma.bar.update({
        where: { bar_id: barId },
        data: barData,
    });
}

export async function deleteBar(barId: number) {
    return await prisma.bar.delete({
        where: { bar_id: barId },
    });
}

export async function getBars() {
    return await prisma.bar.findMany();
}
