const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const v1JokesRouter = require("./v1/routes/jokesRoute");
const v1QuotesRouter = require("./v1/routes/quotesRoute");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

app.use(bodyParser.json());
app.use("/api/v1/jokes", v1JokesRouter);
app.use("/api/v1/quotes", v1QuotesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
