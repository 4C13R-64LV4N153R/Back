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
    });
}

export async function getLivraisonById(livraisonId: number) {
    return await prisma.livraison.findUnique({
        where: { livraison_id: livraisonId },
    });
}

export async function updateLivraison(livraisonId: number, livraisonData: { utilisateur_id?: number; bar_id?: number; statut?: 'prise_en_charge' | 'livree' | 'refusee' | 'en_attente_de_reponse'; date_livraison?: Date }) {
    return await prisma.livraison.update({
        where: { livraison_id: livraisonId },
        data: livraisonData,
    });
}

export async function deleteLivraison(livraisonId: number) {
    return await prisma.livraison.delete({
        where: { livraison_id: livraisonId },
    });
}

export async function getLivraisons() {
    return await prisma.livraison.findMany();
}
