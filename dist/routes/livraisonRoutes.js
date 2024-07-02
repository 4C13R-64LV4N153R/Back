"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const livraisonController_1 = require("../controllers/livraisonController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /livraison/{id}:
 *  get:
 *  summary: Get a livraison by id
 *  parameters:
 *      - in: path
 *      name: id
 *      required: true
 *      schema:
 *          type: integer
 *  responses:
 *      200:
 *          description: Livraison found
 *      404:
 *          description: Livraison not found
 *      500:
 *          description: Unknown error
 */
router.get('/:id', authMiddleware_1.authenticateToken, livraisonController_1.getLivraisonByIdHandler);
/**
 * @swagger
 * /livraison:
 *  post:
 *  summary: Create a new livraison
 *  requestBody:
 *      required: true
 *      content:
 *          application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  idCommande:
 *                      type: integer
 *                  idLivreur:
 *                      type: integer
 *                  dateLivraison:
 *                      type: string
 *                  required:
 *                      - idCommande
 *                      - idLivreur
 *                      - dateLivraison
 *  responses:
 *      201:
 *          description: Livraison created
 *      400:
 *          description: Bad request
 *      500:
 *          description: Unknown error
 
 */
router.post('/', authMiddleware_1.authenticateToken, livraisonController_1.createLivraisonHandler);
/**
 * @swagger
 * /livraison/{id}:
 *  put:
 *  summary: Update a livraison
 *  parameters:
 *      - in: path
 *      name: id
 *      required: true
 *      schema:
 *          type: integer
 *  requestBody:
 *      required: true
 *      content:
 *          application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  idCommande:
 *                      type: integer
 *                  idLivreur:
 *                      type: integer
 *                  dateLivraison:
 *                      type: string
 *                  required:
 *                      - idCommande
 *                      - idLivreur
 *                      - dateLivraison
 *  responses:
 *      200:
 *          description: Livraison updated
 *      500:
 *          description: Unknown error
 */
router.put('/:id', authMiddleware_1.authenticateToken, livraisonController_1.updateLivraisonHandler);
/**
 * @swagger
 * /livraison:
 *  get:
 *  summary: Get all livraisons
 *  responses:
 *      200:
 *          description: Livraisons found
 *      500:
 *          description: Unknown error
 */
router.get('/', authMiddleware_1.authenticateToken, livraisonController_1.getLivraisonsHandler);
exports.default = router;
