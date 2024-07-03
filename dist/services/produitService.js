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
exports.createProduct = createProduct;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createProduct(productData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.produit.create({
            data: {
                nom: productData.nom,
                contenance: productData.contenance,
                unite: productData.unite,
                partenaire_id: productData.partenaire_id,
                img_url: productData.img_url
            },
        });
    });
}
function getProductById(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.produit.findUnique({
            where: { id: productId },
        });
    });
}
function updateProduct(productId, productData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.produit.update({
            where: { id: productId },
            data: productData,
        });
    });
}
function deleteProduct(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.produit.delete({
            where: { id: productId },
        });
    });
}
