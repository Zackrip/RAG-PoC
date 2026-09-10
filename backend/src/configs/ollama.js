import ollama from "ollama";

const embeddings = {
  embedQuery: async (text) => {
    const response = await ollama.embed({
      model: "nomic-embed-text",
      input: text,
    });

    return response.embeddings[0];
  },

  embedDocuments: async (texts) => {
    const response = await ollama.embed({
      model: "nomic-embed-text",
      input: texts,
    });

    return response.embeddings;
  },
};

export default {
  embeddings,
};