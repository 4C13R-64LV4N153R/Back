import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createLivraison(livraisonData: { utilisateur_id: number; bar_id: number; statut: 'prise_en_charge' | 'livree' | 'refusee' | 'en_attente_de_reponse'; date_livraison: Date }) {
    return await prisma.livraison.create({
        data: {
            utilisateur_id: livraisonData.utilisateur_id,
            bar_id: livraisonData.bar_id,
            statut: livraisonData.statut,
            date_livraison: livraisonData.date_livraison
        },
        include: {
            utilisateur: true,
            bar: true,
            produits: true,
        },
    });
}

export async function getLivraisonById(livraisonId: number) {
    return await prisma.livraison.findFirst({
        where: {
            id: livraisonId,
        },
        include: {
            utilisateur: true,
            bar: true,
            produits: true,
        },
    });
}

export async function updateLivraison(
    livraisonId: number,
    livraisonData: { utilisateur_id?: number; bar_id?: number; statut?: 'prise_en_charge' | 'livree' | 'refusee' | 'en_attente_de_reponse'; date_livraison?: Date }
) {
    // Fetch the current status of the livraison
    const existingLivraison = await prisma.livraison.findUnique({
        where: { id: livraisonId },
        include: {
            produits: true,
        },
    });

    if (!existingLivraison) {
        throw new Error('Livraison not found');
    }

    // Extract the statut from livraisonData
    const { statut, utilisateur_id, ...otherData } = livraisonData;

    // Prepare update data
    const updateData: any = {
        ...otherData,
    };

    if (statut) {
        updateData.statut = statut;
    }

    if (utilisateur_id) {
        updateData.utilisateur_id = utilisateur_id;
    }

    // Update the livraison status and other fields
    const updatedLivraison = await prisma.livraison.update({
        where: { id: livraisonId },
        data: updateData,
        include: {
            utilisateur: true,
            bar: true,
            produits: true,
        },
    });

    // Check if the status has changed to 'livree'
    if (existingLivraison.statut === 'prise_en_charge' && updatedLivraison.statut === 'livree') {
        // Update the bar's stock
        await updateBarStock(updatedLivraison.bar_id, updatedLivraison.produits);
    }

    return updatedLivraison;
}

async function updateBarStock(barId: number, produits: { produit_id: number; quantite: number }[]) {
    for (const produit of produits) {
        await prisma.stock.updateMany({
            where: {
                bar_id: barId,
                produit_id: produit.produit_id,
            },
            data: {
                quantite: {
                    increment: produit.quantite,
                },
            },
        });
    }
}

export async function deleteLivraison(livraisonId: number) {
    return await prisma.livraison.delete({
        where: { id: livraisonId },
        include: {
            utilisateur: true,
            bar: true,
            produits: true,
        },
    });
}

export async function getLivraisons() {
    return await prisma.livraison.findMany({
        include: {
            utilisateur: true,
            bar: true,
            produits: true,
        },
    });
}
