const DB = require("./db.json");

const { saveToDatabase } = require("./utils.js");

const getARandomJoke = () => {
  try {
    const random = Math.floor(Math.random() * DB.jokes.length);
    return DB.jokes[random];
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getASelectedJoke = (id) => {
  try {
    const joke = DB.jokes.find((el) => el.id === id);

    if (!joke) throw { status: 400, message: `Can't find the ${id}` };
    return joke;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createAJoke = (newJoke) => {
  try {
    const isAlreadyThere =
      DB.jokes.findIndex((joke) => joke.content === newJoke.content) > -1;

    if (isAlreadyThere) {
      throw {
        status: 400,
        message: `Record is already present with the same content: ${newJoke.content}`,
      };
    }

    DB.jokes.push(newJoke);
    saveToDatabase(DB);

    return newJoke;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getARandomJoke,
  createAJoke,
  getASelectedJoke,
};
