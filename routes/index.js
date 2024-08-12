import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
  res.render("index", { title: "Produc Listing" });
});

export default router;
