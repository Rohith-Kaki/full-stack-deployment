import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173", //fall back prot
      "http://localhost:5174",
      "http://localhost:3000",
      // add the production url or IP
      "https://testapp.rohithkaki.cloud"
    ],
    credentials: true,
  })
);

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = 4000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`server is running at http://localhost:${PORT}`)
);
