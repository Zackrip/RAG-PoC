import documentService from "../services/document.service.js";
import storeDocuments from "../services/vector.service.js";
import Document from "../models/document.model.js";
import User from "../models/auth.model.js";

const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Document file is required" });
    }

    const document = await Document.create({
      userId: req.user.id,
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      filePath: req.file.path,
      fileSize: req.file.size,
      status: "processing",
    });

    const result = await documentService.processDocument(req.file);
    await storeDocuments(result.documents);

    await document.update({ status: "processed" });

    return res.status(201).json({
      success: true,
      message: "Document uploaded and indexed successfully",
      data: {
        documentId: document.id,
        fileName: result.fileName,
        fileType: result.fileType,
        chunkCount: result.chunkCount,
        fileSize: document.fileSize,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      status: "failed",
      message: "Failed to process document",
      error: error.message,
    });
  }
};

export default {
  uploadDocument,
};
