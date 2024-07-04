import { Router } from 'express';
import { getBarByIdHandler, createBarHandler, deleteBarHandler, getBarsHandler, updateBarHandler } from '../controllers/barController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

/**
 * @swagger
 * /bars/{id}:
 *   get:
 *     summary: Get a bar by id
 *     tags:
 *      - bar
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bar found
 *       404:
 *         description: Bar not found
 *       500:
 *         description: Unknown error
 */
router.get('/:id', authenticateToken, getBarByIdHandler);

/**
 * @swagger
 * /bars:
 *   post:
 *     summary: Create a new bar
 *     tags:
 *       - bar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: Bar à vins VIP
 *               stocks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     produit_id:
 *                       type: integer
 *                       example: 1
 *                     quantite:
 *                       type: integer
 *                       example: 4
 *     responses:
 *       200:
 *         description: Bar created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nom:
 *                   type: string
 *                   example: Bar à vins VIP
 *                 stocks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       produit_id:
 *                         type: integer
 *                         example: 1
 *                       quantite:
 *                         type: integer
 *                         example: 4
 *                 livraisons:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */
router.post('/', authenticateToken, createBarHandler);

/**
 * @swagger
 * /bars/{id}:
 *   put:
 *     summary: Update a bar
 *     tags:
 *       - bar
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: Bar à vins VIP
 *               stocks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     produit_id:
 *                       type: integer
 *                       example: 1
 *                     quantite:
 *                       type: integer
 *                       example: 4
 *     responses:
 *       200:
 *         description: Bar updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nom:
 *                   type: string
 *                   example: Bar à vins VIP
 *                 stocks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       produit_id:
 *                         type: integer
 *                         example: 1
 *                       quantite:
 *                         type: integer
 *                         example: 4
 *                 livraisons:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */
router.put('/:id', authenticateToken, updateBarHandler);

/**
 * @swagger
 * /bars/{id}:
 *   delete:
 *     summary: Delete a bar
 *     tags:
 *      - bar
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Bar deleted
 *       500:
 *         description: Unknown error
 */
router.delete('/:id', authenticateToken, deleteBarHandler);


/**
 * @swagger
 * /bars:
 *   get:
 *     summary: Get all bars
 *     tags:
 *      - bar
 *     responses:
 *       200:
 *         description: Bars found
 *       404:
 *         description: Bars not found
 *       500:
 *         description: Unknown error
 */
router.get('/', authenticateToken, getBarsHandler);

export default router;
