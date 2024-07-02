import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();

export async function createUser(userData: { name: string; email: string; password: string}) {
    return await prisma.utilisateur.create({
        data: { name: userData.name, email: userData.email, password: userData.password }
    });
}

export async function getUserById(userId: number) {
    return await prisma.utilisateur.findUnique({
        where: { utilisateur_id: userId },
    });
}

export async function updateUser(userId: number, userData: { name?: string; email?: string }) {
    return await prisma.utilisateur.update({
        where: { utilisateur_id: userId },
        data: userData,
    });
}

export async function deleteUser(userId: number) {
    return await prisma.utilisateur.delete({
        where: { utilisateur_id: userId },
    });
}