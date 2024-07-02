import { Request, Response } from "express";
import { getBarById, createBar, updateBar, getBars, deleteBar } from "../services/barService";

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