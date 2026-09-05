import gemini from "../configs/gemini.js";
import searchDocuments from "./retrieval.service.js";

const generate = async (question) => {
  const documents = await searchDocuments.searchVectorStore(question, 3);

  const context = documents.map((doc) => doc.pageContent).join("\n\n");

  const prompt = `
You are an AI document reader.

Answer the user's question using only the provided context.
If the answer is not present in the context, say:
"I couldn't find that information in the document."

Context:
${context}

Question:
${question}

Answer:
`;

  const response = await gemini.llm.invoke(prompt);

  return response.content;
};

export default generate;
