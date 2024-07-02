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
exports.createPartenaire = createPartenaire;
exports.getPartenaireById = getPartenaireById;
exports.updatePartenaire = updatePartenaire;
exports.deletePartenaire = deletePartenaire;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createPartenaire(partenaireData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.partenaire.create({
            data: { nom: partenaireData.nom },
        });
    });
}
function getPartenaireById(partenaireId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.partenaire.findUnique({
            where: { id: partenaireId },
        });
    });
}
function updatePartenaire(partenaireId, partenaireData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.partenaire.update({
            where: { id: partenaireId },
            data: partenaireData,
        });
    });
}
function deletePartenaire(partenaireId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.partenaire.delete({
            where: { id: partenaireId },
        });
    });
}
