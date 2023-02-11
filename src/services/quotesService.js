const { v4: uuid } = require("uuid");
const quotes = require("../database/quotes");

const getARandomQuote = () => {
  try {
    const random = quotes.getARandomQuote();
    return random;
  } catch (error) {
    throw error;
  }
};

const getASelectedQuote = (id) => {
  try {
    const joke = quotes.getASelectedQuote(id);
    return joke;
  } catch (error) {
    throw error;
  }
};

const createAQuote = (newQuote) => {
  const modQuote = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-us"),
    updatedAt: new Date().toLocaleString("en-us"),
    ...newQuote,
  };
  try {
    const createdQuote = quotes.createAQuote(modQuote);
    return createdQuote;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getARandomQuote,
  getASelectedQuote,
  createAQuote,
};
