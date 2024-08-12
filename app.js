import express from "express";
import router from "./routes/index.js";

const app = express();

// middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine
app.set("view engine", "pug");

// routes
app.use("/", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}!`);
});
