import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

import { TaskType } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-embedding-2",
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "Document title",
});

const llm = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-3.6-flash",
    temperature: 0,
});

export default {
    embeddings,
    llm
};