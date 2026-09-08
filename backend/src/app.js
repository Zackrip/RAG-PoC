import express from "express";
import loadDocument from "./services/document.service.js";
import createEmbeddings from "./services/embeddings.service.js";
import createVectorStore from "./services/vector.service.js";
import searchDocuments from "./services/retrieval.service.js";
import qdrantClient from "./configs/qdrant.js";
import generateAnswer from "./services/rag.service.js";
import authRoutes from "./routes/auth.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import documentRoutes from "./routes/document.routes.js";

const app = express();
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/documents", documentRoutes);

// await createVectorStore(documents);
// await qdrantClient.deleteCollection("documents")




app.get("/", (req, res) => {
  res.send("AI Document Reader API");
});

export default app;
