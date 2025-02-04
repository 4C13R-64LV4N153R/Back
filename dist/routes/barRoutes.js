"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const barController_1 = require("../controllers/barController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
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
router.get('/:id', authMiddleware_1.authenticateToken, barController_1.getBarByIdHandler);
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
router.post('/', authMiddleware_1.authenticateToken, barController_1.createBarHandler);
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
 *     responses:
 *       200:
 *         description: Bar updated
 *       500:
 *         description: Unknown error
 */
router.put('/:id', authMiddleware_1.authenticateToken, barController_1.updateBarHandler);
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
router.delete('/:id', authMiddleware_1.authenticateToken, barController_1.deleteBarHandler);
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
router.get('/', authMiddleware_1.authenticateToken, barController_1.getBarsHandler);
exports.default = router;
