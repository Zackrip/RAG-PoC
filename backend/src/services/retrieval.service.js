import ollama from "../configs/ollama.js";
import qdrantClient from "../configs/qdrant.js";

const COLLECTION_NAME = "documents";

const createQueryEmbedding = async (text) => {
  const vector = await ollama.embeddings.embedQuery(text);

  if (!vector?.length) {
    throw new Error("Ollama returned an empty query embedding");
  }

  return vector;
};

const searchVectorStore = async (query, k = 5) => {
  const queryVector = await createQueryEmbedding(query);

  const result = await qdrantClient.query(COLLECTION_NAME, {
    query: queryVector,
    limit: k,
    with_payload: true,
  });

  return result.points.map((point) => ({
    pageContent: point.payload?.pageContent ?? "",
    metadata: point.payload?.metadata ?? {},
    score: point.score,
  }));
};

export default {
  searchVectorStore,
};
