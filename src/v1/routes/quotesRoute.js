const express = require("express");
const router = express.Router();

const quotesController = require("../../controllers/quotesController");

router.get("/", quotesController.getARandomQuote);

router.get("/:quoteId", quotesController.getASelectedQuote);

router.post("/", quotesController.createAQuote);

module.exports = router;
