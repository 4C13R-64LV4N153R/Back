import { Request, Response } from 'express';
import { getProductById, createProduct, updateProduct } from '../services/produitService';

export const getProductByIdHandler = async (req: Request, res: Response) => {
    try {
        const Product = await getProductById(Number(req.params.id));
        if (!Product) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(Product);
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

export const createProductHandler = async (req: Request, res: Response) => {
    try {
        const Product = await createProduct(req.body);
        res.status(201).json(Product);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

export const updateProductHandler = async (req: Request, res: Response) => {
    try {
        const Product = await updateProduct(Number(req.params.id), req.body);
        res.json(Product);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}