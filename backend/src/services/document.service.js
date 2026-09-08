import fs from "fs/promises";

import { PDFParse } from "pdf-parse";
import path from "path";

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

import { Document } from "@langchain/core/documents";

const readDocument = async (filePath, mimeType) => {
  const extension = path.extname(filePath).toLowerCase();
  if (extension === ".pdf") {
    const buffer = await fs.readFile(filePath);

    const parser = new PDFParse({
      data: buffer,
    });

    try {
      const result = await parser.getText();

      return result.text;
    } finally {
      await parser.destroy();
    }
  }

  if (extension === ".txt") {
    return await fs.readFile(filePath, "utf-8");
  }
};

const createChunks = async (text) => {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  const chunks = await textSplitter.splitText(text);

  return chunks.map(
    (chunk) =>
      new Document({
        pageContent: chunk,
      })
  );
};

const processDocument = async (file) => {
  const text = await readDocument(file.path, file.mimetype);

  const documents = await createChunks(text);

  return {
    documents,
    fileName: file.originalname,
    filePath: file.path,
    fileType: file.mimetype,
    chunkCount: documents.length,
  };
};

export default {
  readDocument,
  createChunks,
  processDocument,
};