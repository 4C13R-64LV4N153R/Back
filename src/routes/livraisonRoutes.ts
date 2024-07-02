import { Router } from "express";
import { getLivraisonByIdHandler, createLivraisonHandler, getLivraisonsHandler, updateLivraisonHandler } from "../controllers/livraisonController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.get('/:id', authenticateToken, getLivraisonByIdHandler);
router.post('/', authenticateToken, createLivraisonHandler);
router.put('/:id', authenticateToken, updateLivraisonHandler);
router.get('/', authenticateToken, getLivraisonsHandler);
