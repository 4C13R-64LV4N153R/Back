import { Router } from 'express';
import { getFixturesHandler } from '../controllers/adminController';

const router = Router();
/**
 * @swagger
 * /admin/fixtures:
 *   get:
 *     summary: Get fixtures
 *     tags: 
 *      - admin
 *     responses:
 *       200:
 *         description: Fixtures found
 *       500:
 *         description: Unknown error
 */
router.get('/fixtures', getFixturesHandler);

export default router;