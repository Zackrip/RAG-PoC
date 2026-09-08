import chatController from "../controllers/chat.controller.js";
import express from "express";

const router = express.Router();

router.post('/', chatController.askQuestion);

export default router;