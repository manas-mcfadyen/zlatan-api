const jokesService = require("../services/jokesService");

const getARandomJoke = (req, res) => {
  try {
    const randomJoke = jokesService.getARandomJoke();
    res.status(200).send({
      status: "ok",
      data: randomJoke,
    });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "failed", data: { error: err.message || err } });
  }
};

const getASelectedJoke = (req, res) => {
  if (!req.params.jokeId)
    res
      .status(400)
      .send({ status: "failed", data: { error: "Id is missing" } });
  try {
    const selectedJoke = jokesService.getASelectedJoke(req.params.jokeId);
    res.status(200).send({
      status: "ok",
      data: selectedJoke,
    });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "failed", data: { error: err.message || err } });
  }
};

const createAJoke = (req, res) => {
  const { body } = req;
  if (!body.content)
    res
      .status(400)
      .send({ status: "failed", data: { error: "Content key is missing" } });

  const newJoke = {
    content: body.content,
  };

  try {
    const createdJoke = jokesService.createAJoke(newJoke);
    res.send({ status: "ok", data: createdJoke });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "failed", data: { error: err.message || err } });
  }
};

module.exports = {
  getARandomJoke,
  getASelectedJoke,
  createAJoke,
};
