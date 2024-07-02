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
exports.createStock = createStock;
exports.getStockByBarAndProduct = getStockByBarAndProduct;
exports.updateStock = updateStock;
exports.deleteStock = deleteStock;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createStock(stockData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.stock.create({
            data: {
                bar_id: stockData.bar_id,
                produit_id: stockData.produit_id,
                quantite: stockData.quantite
            },
        });
    });
}
function getStockByBarAndProduct(barId, produitId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.stock.findUnique({
            where: {
                bar_id_produit_id: {
                    bar_id: barId,
                    produit_id: produitId
                }
            },
        });
    });
}
function updateStock(barId, produitId, quantite) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.stock.update({
            where: {
                bar_id_produit_id: {
                    bar_id: barId,
                    produit_id: produitId
                }
            },
            data: { quantite },
        });
    });
}
function deleteStock(barId, produitId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.stock.delete({
            where: {
                bar_id_produit_id: {
                    bar_id: barId,
                    produit_id: produitId
                }
            },
        });
    });
}
