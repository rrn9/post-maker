const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

const YOUR_API_KEY = "";

app.get("/", async (req, res) => {
  try {
    const q = await query();
    res.send(`Result://// ${q}`);
  } catch (err) {
    res.send("Error: ", err);
  }
});

app.listen(PORT, () => {
  console.log("Server running");
});

const query = async () => {
  const genAI = new GoogleGenerativeAI(YOUR_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "the topic is web development. I am a mern stack developer. Give me posts related to mern stack to post on linkedin and twitter. I am going to post 1 post daily. Give me posts for a week together. Do not keep any empty fields, generate posts that i can directly copy paste to the destination";

  const result = await model.generateContent(prompt);
  console.log("Result.response.text()", result.response.text());
  console.log("Result is: ", result);
  return result.response.text();
};
