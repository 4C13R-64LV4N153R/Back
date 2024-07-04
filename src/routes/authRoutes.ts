import { Router } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *      - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Unknown error
 */
router.post('/register', register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags:
 *      - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in
 *       400:
 *         description: Bad request
 *       500:
 *         description: Unknown error
 */
router.post('/login', login);


export default router;
