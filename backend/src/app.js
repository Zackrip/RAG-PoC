import express from "express";
import loadDocument from "./services/document.service.js";
import createEmbeddings from "./services/embeddings.service.js";
import createVectorStore from "./services/vector.service.js";
import searchDocuments from "./services/retrieval.service.js";
import qdrantClient from "./configs/qdrant.js";
import generateAnswer from "./services/rag.service.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);

const documents = await loadDocument("./documents/sample.txt");

console.log("Total chunks:", documents.length);
// await createVectorStore(documents);
// await qdrantClient.deleteCollection("documents")

// 3. Test retrieval
const results = await searchDocuments.searchVectorStore(
  "Who is cristiano ronaldo?",
  3,
);

console.log("\nRetrieved documents:");

results.forEach((doc, index) => {
  console.log(`\n--- Result ${index + 1} ---`);
  console.log(doc.pageContent);
});

// 4. Test generation
const answer = await generateAnswer(
  "Who is cristiano ronaldo?",
);

console.log("\nAI Answer:");
console.log(answer);

// console.log("Total vectors:", vectors.length);
// console.log("Vector dimension:", vectors[0].length);
// console.log("First vector:", vectors[0]);

app.get("/", (req, res) => {
  res.send("AI Document Reader API");
});

export default app;
