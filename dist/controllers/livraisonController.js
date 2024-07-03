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
exports.getPendingLivraisonsHandler = exports.getLivraisonsHandler = exports.updateLivraisonHandler = exports.createLivraisonHandler = exports.getLivraisonByIdHandler = void 0;
const livraisonService_1 = require("../services/livraisonService");
const getLivraisonByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livraison = yield (0, livraisonService_1.getLivraisonById)(Number(req.params.id));
        if (!livraison) {
            res.status(404).json({ error: 'Livraison not found' });
        }
        else {
            res.json(livraison);
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
exports.getLivraisonByIdHandler = getLivraisonByIdHandler;
const createLivraisonHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livraison = yield (0, livraisonService_1.createLivraison)(req.body);
        res.status(201).json(livraison);
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
exports.createLivraisonHandler = createLivraisonHandler;
const updateLivraisonHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livraison = yield (0, livraisonService_1.updateLivraison)(Number(req.params.id), req.body);
        res.json(livraison);
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
exports.updateLivraisonHandler = updateLivraisonHandler;
const getLivraisonsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livraisons = yield (0, livraisonService_1.getLivraisons)();
        res.json(livraisons);
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
exports.getLivraisonsHandler = getLivraisonsHandler;
const getPendingLivraisonsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getPendingLivraisonsHandler                                                        AAAAAAAAAAAAAAAAAAAAAAA');
        const livraisons = yield (0, livraisonService_1.getLivraisons)();
        console.log(livraisons);
        //const pendingLivraisons = livraisons.filter(livraison => livraison.statut === LivraisonStatut.en_attente_de_reponse);
        //console.log(pendingLivraisons);
        //res.json(pendingLivraisons);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log('getPendingLivraisonsHandler                                                        AAAAAAAAAAAAAAAAAAAAAAA');
            res.status(500).json({ error: error.message });
        }
        else {
            console.log('getPendingLivraisonsHandler                                                        AAAAAAAAAAAAAAAAAAAAAAA');
            res.status(500).json({ error: 'Unknown error' });
        }
    }
});
exports.getPendingLivraisonsHandler = getPendingLivraisonsHandler;
