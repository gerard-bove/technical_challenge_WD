const PORT = process.env.PORT || 5005;
const path = require("path")
const data = require("./data/phones.json");
const express = require("express");
const router = express.Router();

const app = express();
require("./config")(app);


app.get("/phones", (req, res, next) => {
    res.json(data)
})

app.get("/phones/:id", (req, res, next) => {
  var options = {
    root: path.join(__dirname, 'public'),
    
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  const { id } = req.params;
  res.sendFile(data[id].imageFileName, options, function (err) {
    if (err) {
      next(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});