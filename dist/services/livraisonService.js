"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLivraison = createLivraison;
exports.getLivraisonById = getLivraisonById;
exports.updateLivraison = updateLivraison;
exports.deleteLivraison = deleteLivraison;
exports.getLivraisons = getLivraisons;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createLivraison(livraisonData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraison.create({
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
    });
}
function getLivraisonById(livraisonId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraison.findUnique({
            where: {
                id: livraisonId,
            },
            include: {
                utilisateur: true,
                bar: true,
                produits: true,
            },
        });
    });
}
function updateLivraison(livraisonId, livraisonData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraison.update({
            where: { id: livraisonId },
            data: livraisonData,
            include: {
                utilisateur: true,
                bar: true,
                produits: true,
            },
        });
    });
}
function deleteLivraison(livraisonId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraison.delete({
            where: { id: livraisonId },
            include: {
                utilisateur: true,
                bar: true,
                produits: true,
            },
        });
    });
}
function getLivraisons() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraison.findMany({
            include: {
                utilisateur: true,
                bar: true,
                produits: true,
            },
        });
    });
}
