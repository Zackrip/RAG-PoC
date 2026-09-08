import documentController from "../controllers/document.controller.js";
import express from "express";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload", upload.single("document"), documentController.uploadDocument);

export default router;