import fs from "fs/promises";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";

const loadDocument = async (filePath) => {
  const text = await fs.readFile(filePath, "utf-8");
  
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 150,
    chunkOverlap: 30,
  });

 const createDocumentChunks = async (text) => {
    const chunks = await textSplitter.splitText(text);
    return chunks.map(chunk => new Document({ pageContent: chunk }));
  };

  const documentChunks = await createDocumentChunks(text);
  return documentChunks;
};

export default loadDocument;
