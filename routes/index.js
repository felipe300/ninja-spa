import express from "express";
import articles from "../data/article.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.render("index", { title: "Produc Listing", articles: articles });
});

export default router;
