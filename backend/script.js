import { config } from "dotenv";
import OpenAI from "openai";
import express, { response } from "express";
import cors from "cors";
config();

const app = express();
const port = process.env.PORT || 3001;

const openai = new OpenAI();

app.use(express.json());
app.use(cors());

app.post("/api/chat", async (req, res) => {
  try {
    const { input } = req.body;
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: input }],
      model: "gpt-3.5-turbo",
    });
    console.log("Generated response:", completion.choices[0].message.content);
    res.json({ response: completion.choices[0].message.content });
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Someting went wrong:", error.message);
    res.status(500).json({ error: "Server API error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
