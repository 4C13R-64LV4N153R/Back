import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createStock(stockData: { bar_id: number; produit_id: number; quantite: number }) {
    return await prisma.stock.create({
        data: { 
            bar_id: stockData.bar_id, 
            produit_id: stockData.produit_id, 
            quantite: stockData.quantite 
        },
    });
}

export async function getStockByBarAndProduct(barId: number, produitId: number) {
    return await prisma.stock.findUnique({
        where: { 
            bar_id_produit_id: {
                bar_id: barId,
                produit_id: produitId
            }
        },
    });
}

export async function updateStock(barId: number, produitId: number, quantite: number) {
    return await prisma.stock.update({
        where: { 
            bar_id_produit_id: {
                bar_id: barId,
                produit_id: produitId
            }
        },
        data: { quantite },
    });
}

export async function deleteStock(barId: number, produitId: number) {
    return await prisma.stock.delete({
        where: { 
            bar_id_produit_id: {
                bar_id: barId,
                produit_id: produitId
            }
        },
    });
}
