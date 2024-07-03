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
exports.createBar = createBar;
exports.getBarById = getBarById;
exports.updateBar = updateBar;
exports.deleteBar = deleteBar;
exports.getBars = getBars;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createBar(barData) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const bar = yield prisma.bar.create({
            data: {
                nom: barData.nom,
                stocks: {
                    create: (_a = barData.stocks) === null || _a === void 0 ? void 0 : _a.map(stock => ({
                        produit_id: stock.produit_id,
                        quantite: stock.quantite,
                    })),
                },
            },
            include: {
                stocks: true,
                livraisons: true,
            },
        });
        return bar;
    });
}
function getBarById(barId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.bar.findUnique({
            where: { id: barId },
            include: {
                stocks: true,
            },
        });
    });
}
function updateBar(barId, barData) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const updates = (_a = barData.stocks) === null || _a === void 0 ? void 0 : _a.map(stock => prisma.stock.upsert({
            where: {
                bar_id_produit_id: {
                    bar_id: barId,
                    produit_id: stock.produit_id,
                },
            },
            update: {
                quantite: stock.quantite,
            },
            create: {
                bar_id: barId,
                produit_id: stock.produit_id,
                quantite: stock.quantite,
            },
        }));
        yield prisma.$transaction(updates || []);
        const bar = yield prisma.bar.update({
            where: { id: barId },
            data: {
                nom: barData.nom,
            },
            include: {
                stocks: true,
            },
        });
        return bar;
    });
}
function deleteBar(barId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.bar.delete({
            where: { id: barId },
            include: {
                stocks: true,
            },
        });
    });
}
function getBars() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.bar.findMany({
            include: {
                stocks: true,
            },
        });
    });
}
