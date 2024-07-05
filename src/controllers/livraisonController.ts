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
            res.status(500).json({ error: (error as Error).message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

export const createLivraisonHandler = async (req: Request, res: Response) => {
    try {
        const { utilisateur_id, bar_id, stocks } = req.body;
        const newLivraison = await createLivraison(utilisateur_id, bar_id, stocks);
        res.status(201).json(newLivraison);
    } catch (error) {
        console.error('Error creating livraison:', error);
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateLivraisonHandler = async (req: Request, res: Response) => {
    try {
        console.log('req.body:', req.body);
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
        const livraisons = await getLivraisons();
        const pendingLivraisons = livraisons.filter((livraison: { statut: any; }) => livraison.statut === LivraisonStatut.en_attente_de_reponse);
        res.json(pendingLivraisons);
    } catch (error) {
        console.error('Error:', error); // Enhanced logging
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};

