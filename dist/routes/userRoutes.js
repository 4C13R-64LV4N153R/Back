"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /user/{id}:
 *  get:
 *  summary: Get a user by id
 *  parameters:
 *      - in: path
 *      name: id
 *      required: true
 *      schema:
 *          type: integer
 *  responses:
 *      200:
 *          description: User found
 *      404:
 *          description: User not found
 *      500:
 *          description: Unknown error
 */
router.get('/:id', authMiddleware_1.authenticateToken, userController_1.getUserByIdHandler);
/**
 * @swagger
 * /user:
 *  post:
 *  summary: Create a new user
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
router.post('/', authMiddleware_1.authenticateToken, userController_1.createUserHandler);
exports.default = router;
