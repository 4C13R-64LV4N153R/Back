"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const livraisonController_1 = require("../controllers/livraisonController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /livraisons/{id}:
 *   get:
 *     summary: Get a livraison by id
 *     tags:
 *      - livraison
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livraison found
 *       404:
 *         description: Livraison not found
 *       500:
 *         description: Unknown error
 */
router.get('/:id', authMiddleware_1.authenticateToken, livraisonController_1.getLivraisonByIdHandler);
/**
 * @swagger
 * /livraisons:
 *   post:
 *     summary: Create a new livraison
 *     tags:
 *      - livraison
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCommande:
 *                 type: integer
 *               idLivreur:
 *                 type: integer
 *               dateLivraison:
 *                 type: string
 *             required:
 *               - idCommande
 *               - idLivreur
 *               - dateLivraison
 *     responses:
 *       201:
 *         description: Livraison created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Unknown error
 */
router.post('/', authMiddleware_1.authenticateToken, livraisonController_1.createLivraisonHandler);
/**
 * @swagger
 * /livraisons/{id}:
 *   put:
 *     summary: Update a livraison
 *     tags:
 *      - livraison
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCommande:
 *                 type: integer
 *               idLivreur:
 *                 type: integer
 *               dateLivraison:
 *                 type: string
 *             required:
 *               - idCommande
 *               - idLivreur
 *               - dateLivraison
 *     responses:
 *       200:
 *         description: Livraison updated
 *       500:
 *         description: Unknown error
 */
router.put('/:id', authMiddleware_1.authenticateToken, livraisonController_1.updateLivraisonHandler);
/**
 * @swagger
 * /livraisons:
 *   get:
 *     summary: Get all livraisons
 *     tags:
 *      - livraison
 *     responses:
 *       200:
 *         description: Livraisons found
 *       500:
 *         description: Unknown error
 */
router.get('/', authMiddleware_1.authenticateToken, livraisonController_1.getLivraisonsHandler);
/**
 * @swagger
 * /livraisons/pending:
 *   get:
 *     summary: Get all pending livraisons
 *     tags:
 *      - livraison
 *     responses:
 *       200:
 *         description: Pending livraisons found
 *       500:
 *         description: Unknown error
 
 */
router.get('/pending', authMiddleware_1.authenticateToken, livraisonController_1.getPendingLivraisonsHandler);
exports.default = router;
