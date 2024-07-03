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
 *      - bar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *             required:
 *               - name
 *               - address
 *     responses:
 *       201:
 *         description: Bar created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Unknown error
 */
router.post('/', authenticateToken, createBarHandler);

/**
 * @swagger
 * /bars/{id}:
 *   put:
 *     summary: Update a bar
 *     tags:
 *      - bar
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
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *             required:
 *               - name
 *               - address
 *     responses:
 *       200:
 *         description: Bar updated
 *       500:
 *         description: Unknown error
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
 *       500:
 *         description: Unknown error
 */
router.get('/', authenticateToken, getBarsHandler);

export default router;
