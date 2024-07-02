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
        return yield prisma.bar.create({
            data: { nom: barData.nom },
        });
    });
}
function getBarById(barId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.bar.findUnique({
            where: { id: barId },
        });
    });
}
function updateBar(barId, barData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.bar.update({
            where: { id: barId },
            data: barData,
        });
    });
}
function deleteBar(barId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.bar.delete({
            where: { id: barId },
        });
    });
}
function getBars() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.bar.findMany();
    });
}
