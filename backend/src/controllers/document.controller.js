import documentService from "../services/document.service.js";
import storeDocuments from "../services/vector.service.js";

const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Document file is required" });
    }

    const result = await documentService.processDocument(req.file);
    await storeDocuments(result.documents);
    return res.status(201).json({
      success: true,
      message: "Document uploaded and indexed successfully",
      data: {
        fileName: result.fileName,
        fileType: result.fileType,
        chunkCount: result.chunkCount,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to process document",
      error: error.message,
    });
  }
};


export default {
  uploadDocument,
};