import express from "express";
import connectDB from "./db/db";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on port ${port}`);
});
