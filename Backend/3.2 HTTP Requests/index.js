import express from "express";
const app = express();

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World!</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About<h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact<h1>");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})