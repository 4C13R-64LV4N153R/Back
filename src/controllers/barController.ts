import { Request, Response } from "express";
import { getBarById, createBar, updateBar, getBars, deleteBar, getMagasin } from "../services/barService";
import prisma from "../prisma/client";

export const getBarByIdHandler = async (req: Request, res: Response) => {
    try {
        const bar = await getBarById(Number(req.params.id));
        if (!bar) {
            res.status(404).json({ error: "Bar not found" });
        } else {
            res.json(bar);
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
}

export const createBarHandler = async (req: Request, res: Response) => {
    try {
        const bar = await createBar(req.body);
        res.status(201).json(bar);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
}

export const updateBarHandler = async (req: Request, res: Response) => {
    try {
        const bar = await updateBar(Number(req.params.id), req.body);
        res.json(bar);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
}

export const deleteBarHandler = async (req: Request, res: Response) => {
    try {
        await deleteBar(Number(req.params.id));
        res.status(204).end();
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
}

export const getBarsHandler = async (req: Request, res: Response) => {
    try {
        const bars = await getBars();
        res.json(bars);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
}

export const getBarProposalHandler = async (req: Request, res: Response) => {
    try {
        const bar = await getBarById(Number(req.params.id));
        const magasin = await getMagasin();

        if (!bar) {
            res.status(404).json({ error: "Bar not found" });
            return;
        }

        if (!magasin) {
            res.status(404).json({ error: "Magasin not found" });
            return;
        }

        const stocks = bar.stocks;
        const magasinStocks = magasin.stocks;

        const barStocks = await Promise.all(stocks.map(async (stock: { produit_id: any; quantite_max: number; quantite: number }) => {
            const magasinStock = magasinStocks.find((magasinStock: { produit_id: any; }) => magasinStock.produit_id === stock.produit_id);
            const neededQuantity = stock.quantite_max - stock.quantite;
            const produit = await prisma.produit.findUnique({
                where: { id: stock.produit_id },
            });
            const quantite_max = stock.quantite_max;
            return {
                produit,
                quantite: magasinStock ? Math.min(magasinStock.quantite, neededQuantity) : 0,
                quantite_max
            };
        }));
        res.status(200).json({ bar, proposal: barStocks });
    } catch (error) {
        console.error('Error:', error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
};


export const getPendingLivraisonByBarHandler = async (req: Request, res: Response) => {
    try {
        const livraisons = await prisma.livraison.findFirst({
            where: {
                bar_id: Number(req.params.id),
                statut: 'prise_en_charge',
            },
            include: {
                produits: true,
            },
        });
        res.json(livraisons);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
}