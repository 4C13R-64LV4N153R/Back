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
exports.createLivraisonProduit = createLivraisonProduit;
exports.getLivraisonProduitById = getLivraisonProduitById;
exports.updateLivraisonProduit = updateLivraisonProduit;
exports.deleteLivraisonProduit = deleteLivraisonProduit;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createLivraisonProduit(livraisonProduitData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraisonProduit.create({
            data: {
                livraison_id: livraisonProduitData.livraison_id,
                produit_id: livraisonProduitData.produit_id,
                quantite: livraisonProduitData.quantite
            },
        });
    });
}
function getLivraisonProduitById(livraisonProduitId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraisonProduit.findUnique({
            where: { livraison_produit_id: livraisonProduitId },
        });
    });
}
function updateLivraisonProduit(livraisonProduitId, livraisonProduitData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraisonProduit.update({
            where: { livraison_produit_id: livraisonProduitId },
            data: livraisonProduitData,
        });
    });
}
function deleteLivraisonProduit(livraisonProduitId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.livraisonProduit.delete({
            where: { livraison_produit_id: livraisonProduitId },
        });
    });
}
