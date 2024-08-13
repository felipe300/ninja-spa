import express from "express";
import articles from "../data/article.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.render("index", { title: "Produc Listing", articles: articles });
});

router.get("/articles/:id", (req, res) => {
  const { id } = req.params;
  const article = articles.find((a) => a.id === parseInt(id));
  res.render("article", { title: article.name, article: article });
});

router.post("/articles", (req, res) => {
  const { name, body } = req.body;
  const newArticle = { id: Math.floor(Math.random() * 1000000), name, body };
  articles.push(newArticle);
  res.render("partials/list", { articles: articles });
});

export default router;
