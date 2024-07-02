import e, { Router } from "express";
import { getLivraisonByIdHandler, createLivraisonHandler, getLivraisonsHandler, updateLivraisonHandler } from "../controllers/livraisonController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

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
router.get('/:id', authenticateToken, getLivraisonByIdHandler);

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
router.post('/', authenticateToken, createLivraisonHandler);

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
router.put('/:id', authenticateToken, updateLivraisonHandler);

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
router.get('/', authenticateToken, getLivraisonsHandler);

export default router;