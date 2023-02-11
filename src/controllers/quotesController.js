const quotesService = require("../services/quotesService");

const getARandomQuote = (req, res) => {
  try {
    const randomQuote = quotesService.getARandomQuote();
    res.status(200).send({
      status: "ok",
      data: randomQuote,
    });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "failed", data: { error: err.message || err } });
  }
};

const getASelectedQuote = (req, res) => {
  if (!req.params.quoteId)
    res
      .status(400)
      .send({ status: "failed", data: { error: "Id is missing" } });
  try {
    const selectedQuote = quotesService.getASelectedQuote(req.params.quoteId);
    res.status(200).send({
      status: "ok",
      data: selectedQuote,
    });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "failed", data: { error: err.message || err } });
  }
};

const createAQuote = (req, res) => {
  const { body } = req;
  if (!body.content)
    res
      .status(400)
      .send({ status: "failed", data: { error: "Content key is missing" } });

  const newQuote = {
    content: body.content,
  };

  try {
    const createdQuote = quotesService.createAQuote(newQuote);
    res.send({ status: "ok", data: createdQuote });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "failed", data: { error: err.message || err } });
  }
};

module.exports = {
  getARandomQuote,
  getASelectedQuote,
  createAQuote,
};
