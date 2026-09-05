import { QdrantVectorStore } from "@langchain/qdrant";
import gemini from "../configs/gemini.js";
import qdrantClient from "../configs/qdrant.js";
import dotenv from "dotenv";

dotenv.config();

const COLLECTION_NAME = "documents";

const createVectorStore = async (documents) => {
  const collections = await qdrantClient.getCollections();
  const collectionExists = collections.collections.some(
    (collection) => collection.name === COLLECTION_NAME,
  );

  if (collectionExists) {
    const collection = await qdrantClient.getCollection(COLLECTION_NAME);

    if (collection.points_count === 0) {
      await qdrantClient.deleteCollection(COLLECTION_NAME);
    } else {
      return QdrantVectorStore.fromExistingCollection(gemini.embeddings, {
        url: process.env.QDRANT_URL,
        apiKey: process.env.QDRANT_API_KEY,
        collectionName: COLLECTION_NAME,
      });
    }
  }

  const vectorStore = await QdrantVectorStore.fromDocuments(
    documents,
    gemini.embeddings,
    {
      url: process.env.QDRANT_URL,
      apiKey: process.env.QDRANT_API_KEY,
      collectionName: COLLECTION_NAME,
    },
  );

  return vectorStore;
};

export default createVectorStore;
