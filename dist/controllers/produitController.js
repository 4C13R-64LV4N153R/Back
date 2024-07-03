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
exports.updateProductHandler = exports.createProductHandler = exports.getProductByIdHandler = void 0;
const produitService_1 = require("../services/produitService");
const getProductByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield (0, produitService_1.getProductById)(Number(req.params.id));
        if (!Product) {
            res.status(404).json({ error: 'Product not found' });
        }
        else {
            res.json(Product);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
});
exports.getProductByIdHandler = getProductByIdHandler;
const createProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield (0, produitService_1.createProduct)(req.body);
        res.status(201).json(Product);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
});
exports.createProductHandler = createProductHandler;
const updateProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield (0, produitService_1.updateProduct)(Number(req.params.id), req.body);
        res.json(Product);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
});
exports.updateProductHandler = updateProductHandler;
