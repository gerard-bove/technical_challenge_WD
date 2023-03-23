const PORT = process.env.PORT || 5005;

const data = require("./data/phones.json");
const express = require("express");
const router = express.Router();

const app = express();
require("./config")(app);


app.get("/phones", (req, res, next) => {
    res.json(data)
})

app.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(data[id])
  res.send(data[id])
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});