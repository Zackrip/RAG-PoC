
import gemini from "../configs/gemini.js";
import qdrantClient from "../configs/qdrant.js";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const COLLECTION_NAME = "documents";

const VECTOR_SIZE = 768;

const createEmbedding = async (text) => {
  const [vector] = await gemini.embeddings.embedDocuments([text]);

  if (!vector?.length) {
    throw new Error("Gemini returned an empty embedding");
  }

  return vector;
};

const createVectorStore = async (documents) => {
  

  // Check whether collection exists
  const collections = await qdrantClient.getCollections();
  const collectionExists = collections.collections.some(
    (collection) => collection.name === COLLECTION_NAME,
  );

  if (!collectionExists) {
    await qdrantClient.createCollection(COLLECTION_NAME, {
      vectors: {
        size: VECTOR_SIZE,
        distance: "Cosine",
      },
    });
  }

  const points = [];

  for (let i = 0; i < documents.length; i++) {
    const document = documents[i];

    const vector = await createEmbedding(document.pageContent);

    points.push({
      id: crypto.randomUUID(),

      vector,

      payload: {
        pageContent: document.pageContent,

        metadata: {
          ...document.metadata,
          chunkIndex: i,
        },
      },
    });
  }

  await qdrantClient.upsert(COLLECTION_NAME, {
    wait: true,
    points,
  });

  return {
    collectionName: COLLECTION_NAME,
    pointsStored: points.length,
  };
};

export default createVectorStore;
