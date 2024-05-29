const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
app.post("/post", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
   let prompt = req.body.prompt;
   
  try{
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    res.status(200).send(text);
  }catch(error){
     res.status(500).send(error);
  }

});

app.listen(process.env.PORT, () => console.log("Server is running"));
