"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const router = (0, express_1.Router)();
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
router.get('/fixtures', adminController_1.getFixturesHandler);
exports.default = router;
