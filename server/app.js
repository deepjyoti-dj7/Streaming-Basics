import express from "express";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/video", (req, res) => {
  const file = `${__dirname}/public/video1.mkv`;

  res.sendFile(file);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
