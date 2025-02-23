import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(req.body);

})
function bng(req, res, next)
{
  console.log(req.body);
  var s = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your Band Name is</h1><h2> ${s} <h2>`);
  // res.send(req.body["street"] + req.body["pet"]);
  next();
}
app.post("/submit", bng)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
