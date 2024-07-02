import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createPartenaire(partenaireData: { nom: string }) {
    return await prisma.partenaire.create({
        data: { nom: partenaireData.nom },
    });
}

export async function getPartenaireById(partenaireId: number) {
    return await prisma.partenaire.findUnique({
        where: { partenaire_id: partenaireId },
    });
}

export async function updatePartenaire(partenaireId: number, partenaireData: { nom?: string }) {
    return await prisma.partenaire.update({
        where: { partenaire_id: partenaireId },
        data: partenaireData,
    });
}

export async function deletePartenaire(partenaireId: number) {
    return await prisma.partenaire.delete({
        where: { partenaire_id: partenaireId },
    });
}
