"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /auth/register:
 *  post:
 *  summary: Register a new user
 *  requestBody:
 *      required: true
 *      content:
 *          application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  required:
 *                      - name
 *                      - email
 *                      - password
 *  responses:
 *      201:
 *          description: User created
 *      400:
 *          description: Bad request
 *      500:
 *          description: Unknown error
 */
router.post('/register', authController_1.register);
/**
 * @swagger
 * /auth/login:
 *  post:
 *  summary: Login
 *  requestBody:
 *      required: true
 *      content:
 *          application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  required:
 *                      - email
 *                      - password
 *  responses:
 *      200:
 *          description: User logged in
 *      400:
 *          description: Bad request
 *      500:
 *          description: Unknown error
 */
router.post('/login', authController_1.login);
exports.default = router;
