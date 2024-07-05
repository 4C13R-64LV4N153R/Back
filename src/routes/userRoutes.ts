import { Router } from 'express';
import { getUserByIdHandler, createUserHandler, getUserByToken } from '../controllers/userController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();
/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get the authenticated user's ID
 *     tags:
 *      - users
 *     responses:
 *       200:
 *         description: User  found
 *       401:
 *         description: Unauthorized
 */
router.get('/me', authenticateToken, getUserByToken);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags:
 *      - users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 *       500:
 *         description: Unknown error
 */
router.get('/:id', authenticateToken, getUserByIdHandler);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *      - users
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
router.post('/', authenticateToken, createUserHandler);

export default router;
