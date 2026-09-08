import generateAnswer from "../services/rag.service.js";

const askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      res.status(400).json({ message: "Question is required" });
    }

    const answer = await generateAnswer(question);

    return res.status(200).json({
      success: true,
      question,
      answer,
    });
  } catch (error) {
     console.error("Chat error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate answer",
      error: error.message,
    });
  }
};

export default {
  askQuestion,
};
