import { Router } from 'express';
import { getAllUsersHandler, createUserHandler } from '../controllers/userController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getAllUsersHandler);
router.post('/', authenticateToken, createUserHandler);

export default router;
