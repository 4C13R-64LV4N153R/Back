import { Router } from "express";
import { getBarByIdHandler, createBarHandler, deleteBarHandler, getBarsHandler, updateBarHandler } from "../controllers/barController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.get('/:id', authenticateToken, getBarByIdHandler);
router.post('/', authenticateToken, createBarHandler);
router.put('/:id', authenticateToken, updateBarHandler);
router.delete('/:id', authenticateToken, deleteBarHandler);
router.get('/', authenticateToken, getBarsHandler);

