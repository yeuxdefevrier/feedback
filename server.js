import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const host = "localhost";

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/feedback", (req, res) => {
  res.render("feedback");
});

app.post("/feedback", (req, res) => {
  const name = req.body.name;
  const feedback = req.body.feedback;
  const email = req.body.email;
  res.render("thx", { name: name, email: email });
});

app.listen(port, host, () => console.log(`${host}:${port} listen...`));
