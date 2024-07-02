import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createProduct(productData: { nom: string; contenance: number; unite: string; partenaire_id: number; img_url: string}) {
    return await prisma.produit.create({
        data: { 
            nom: productData.nom, 
            contenance: productData.contenance, 
            unite: productData.unite, 
            partenaire_id: productData.partenaire_id,
            img_url: productData.img_url
        },
    });
}

export async function getProductById(productId: number) {
    return await prisma.produit.findUnique({
        where: { produit_id: productId },
    });
}

export async function updateProduct(productId: number, productData: { nom?: string; contenance?: number; unite?: string; partenaire_id?: number }) {
    return await prisma.produit.update({
        where: { produit_id: productId },
        data: productData,
    });
}

export async function deleteProduct(productId: number) {
    return await prisma.produit.delete({
        where: { produit_id: productId },
    });
}
