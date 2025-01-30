const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;
const { GoogleGenerativeAI } = require("@google/generative-ai");


const app = express();

app.get("/", (req, res) => {
  res.send("API runnning");
});

app.listen(PORT, () => {
  console.log("Server running");
});

const query = async () => {
  const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Tell me the what is kubernetes";

  const result = await model.generateContent(prompt);
  console.log("Result.response.text()", result.response.text());
  console.log("Result is: ", result);
}

query();