import gemini from "../configs/gemini.js";
import { QdrantVectorStore } from "@langchain/qdrant";

const COLLECTION_NAME = "documents";

const getVectorStore = async () => {
  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    gemini.embeddings,
    {
      url: process.env.QDRANT_URL,
      apiKey: process.env.QDRANT_API_KEY,
      collectionName: COLLECTION_NAME,
    },
  );
  return vectorStore;
};

const searchVectorStore = async (query, k = 5) => {
  const vectorStore = await getVectorStore();
  const results = await vectorStore.similaritySearch(query, k);

  return results;
};  

export default {
  getVectorStore,
  searchVectorStore,
};
