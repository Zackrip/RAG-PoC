import gemini from "../configs/gemini.js";

const generateEmbeddings = async (documents) => {
  const texts = documents.map((doc) => doc.pageContent);

  const embeddings = await gemini.embeddings.embedDocuments(texts);

  return embeddings;
};

  export default generateEmbeddings;