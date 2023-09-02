const express = require("express");
const app = express();
const port = 8080;

// Middleware untuk mengizinkan parsing JSON
app.use(express.json());

const apiRoute = require("./routes/api");
app.use("/api", apiRoute);

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
