import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Olá NLW!");
});

app.listen(3000, () => console.log("Server is running"));
