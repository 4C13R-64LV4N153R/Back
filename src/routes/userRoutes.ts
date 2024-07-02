import { Router } from 'express';
import { getUserByIdHandler, createUserHandler } from '../controllers/userController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.get('/:id', authenticateToken, getUserByIdHandler);
router.post('/', authenticateToken, createUserHandler);

export default router;
