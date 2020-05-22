const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");

const app = express();

// connect database
const db = require("./config/db");
db();
// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
