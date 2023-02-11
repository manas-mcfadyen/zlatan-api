const DB = require("./db.json");

const { saveToDatabase } = require("./utils.js");

const getARandomQuote = () => {
  try {
    const random = Math.floor(Math.random() * DB.quotes.length);
    return DB.quotes[random];
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getASelectedQuote = (id) => {
  try {
    const joke = DB.quotes.find((el) => el.id === id);

    if (!joke) throw { status: 400, message: `Can't find the ${id}` };
    return joke;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createAQuote = (newQuote) => {
  try {
    const isAlreadyThere =
      DB.quotes.findIndex((joke) => joke.content === newQuote.content) > -1;

    if (isAlreadyThere) {
      throw {
        status: 400,
        message: `Record is already present with the same content: ${newQuote.content}`,
      };
    }

    DB.quotes.push(newQuote);
    saveToDatabase(DB);

    return newQuote;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getARandomQuote,
  createAQuote,
  getASelectedQuote,
};
