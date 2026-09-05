import gemini from "../configs/gemini.js";

// const generateEmbeddings = async (documents) => {
//     const embeddings = [];
//     for (const doc of documents) {
//       const embedding = await gemini.embeddings.embedQuery(doc.pageContent);
//       embeddings.push(embedding);
//     }
//     return embeddings;
//   };


const generateEmbeddings = async (documents) => {
  const texts = documents.map((doc) => doc.pageContent);

  const embeddings = await gemini.embeddings.embedDocuments(texts);

  return embeddings;
};


  export default generateEmbeddings;