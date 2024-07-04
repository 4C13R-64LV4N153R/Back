import { Router } from 'express';
import {
    getLivraisonByIdHandler,
    createLivraisonHandler,
    getLivraisonsHandler,
    updateLivraisonHandler,
    getPendingLivraisonsHandler
} from '../controllers/livraisonController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

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
router.get('/pending', authenticateToken, getPendingLivraisonsHandler);

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
router.get('/:id', authenticateToken, getLivraisonByIdHandler);

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
router.post('/', authenticateToken, createLivraisonHandler);

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
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               utilisateur_id:
 *                 type: integer
 *               bar_id:
 *                 type: integer
 *               statut:
 *                 type: string
 *                 enum: [prise_en_charge, livree, refusee, en_attente_de_reponse]
 *               date_livraison:
 *                 type: string
 *                 format: date-time
 *             example:
 *               utilisateur_id: 2
 *               statut: livree
 *               date_livraison: "2024-07-04T00:00:00.000Z"
 *     responses:
 *       200:
 *         description: Livraison updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 utilisateur_id:
 *                   type: integer
 *                   example: 2
 *                 bar_id:
 *                   type: integer
 *                   example: 1
 *                 statut:
 *                   type: string
 *                   example: livree
 *                 date_livraison:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-04T00:00:00.000Z"
 *       500:
 *         description: Unknown error
 */
router.put('/:id', authenticateToken, updateLivraisonHandler);

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
router.get('/', authenticateToken, getLivraisonsHandler);

export default router;
