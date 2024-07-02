import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createLivraisonProduit(livraisonProduitData: { livraison_id: number; produit_id: number; quantite: number }) {
    return await prisma.livraisonProduit.create({
        data: { 
            livraison_id: livraisonProduitData.livraison_id, 
            produit_id: livraisonProduitData.produit_id, 
            quantite: livraisonProduitData.quantite 
        },
    });
}

export async function getLivraisonProduitById(livraisonProduitId: number) {
    return await prisma.livraisonProduit.findUnique({
        where: { livraison_produit_id: livraisonProduitId },
    });
}

export async function updateLivraisonProduit(livraisonProduitId: number, livraisonProduitData: { livraison_id?: number; produit_id?: number; quantite?: number }) {
    return await prisma.livraisonProduit.update({
        where: { livraison_produit_id: livraisonProduitId },
        data: livraisonProduitData,
    });
}

export async function deleteLivraisonProduit(livraisonProduitId: number) {
    return await prisma.livraisonProduit.delete({
        where: { livraison_produit_id: livraisonProduitId },
    });
}
