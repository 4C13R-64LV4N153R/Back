import { Request, Response } from 'express';
import { getLivraisonById, createLivraison, updateLivraison, getLivraisons } from '../services/livraisonService';
import { LivraisonStatut } from '@prisma/client';

export const getLivraisonByIdHandler = async (req: Request, res: Response) => {
    try {
        const livraison = await getLivraisonById(Number(req.params.id));
        if (!livraison) {
            res.status(404).json({ error: 'Livraison not found' });
        } else {
            res.json(livraison);
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

export const createLivraisonHandler = async (req: Request, res: Response) => {
    try {
        const livraison = await createLivraison(req.body);
        res.status(201).json(livraison);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

export const updateLivraisonHandler = async (req: Request, res: Response) => {
    try {
        const livraison = await updateLivraison(Number(req.params.id), req.body);
        res.json(livraison);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

export const getLivraisonsHandler = async (req: Request, res: Response) => {
    try {
        const livraisons = await getLivraisons();
        res.json(livraisons);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

export const getPendingLivraisonsHandler = async (req: Request, res: Response) => {
    try {
        console.log('getPendingLivraisonsHandler                                                        AAAAAAAAAAAAAAAAAAAAAAA');
        const livraisons = await getLivraisons();
        console.log(livraisons);
        const pendingLivraisons = livraisons.filter(livraison => livraison.statut === LivraisonStatut.en_attente_de_reponse);
        console.log(pendingLivraisons);
        res.json(pendingLivraisons);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

