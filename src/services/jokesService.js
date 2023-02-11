const { v4: uuid } = require("uuid");
const jokes = require("../database/jokes");

const getARandomJoke = () => {
  try {
    const random = jokes.getARandomJoke();
    return random;
  } catch (error) {
    throw error;
  }
};

const getASelectedJoke = (id) => {
  try {
    const joke = jokes.getASelectedJoke(id);
    return joke;
  } catch (error) {
    throw error;
  }
};

const createAJoke = (newJoke) => {
  const modJoke = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-us"),
    updatedAt: new Date().toLocaleString("en-us"),
    ...newJoke,
  };
  try {
    const createdJoke = jokes.createAJoke(modJoke);
    return createdJoke;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getARandomJoke,
  getASelectedJoke,
  createAJoke,
};
