"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBarsHandler = exports.deleteBarHandler = exports.updateBarHandler = exports.createBarHandler = exports.getBarByIdHandler = void 0;
const barService_1 = require("../services/barService");
const getBarByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bar = yield (0, barService_1.getBarById)(Number(req.params.id));
        if (!bar) {
            res.status(404).json({ error: "Bar not found" });
        }
        else {
            res.json(bar);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.getBarByIdHandler = getBarByIdHandler;
const createBarHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bar = yield (0, barService_1.createBar)(req.body);
        res.status(201).json(bar);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.createBarHandler = createBarHandler;
const updateBarHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bar = yield (0, barService_1.updateBar)(Number(req.params.id), req.body);
        res.json(bar);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.updateBarHandler = updateBarHandler;
const deleteBarHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, barService_1.deleteBar)(Number(req.params.id));
        res.status(204).end();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.deleteBarHandler = deleteBarHandler;
const getBarsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bars = yield (0, barService_1.getBars)();
        res.json(bars);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.getBarsHandler = getBarsHandler;
