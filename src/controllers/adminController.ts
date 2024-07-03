import { Request, Response } from 'express';
import { getFixtures } from '../prisma/fixtures';

export const getFixturesHandler = async (req: Request, res: Response) => {
    try {
        const fixtures = await getFixtures();
        res.json(fixtures);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

