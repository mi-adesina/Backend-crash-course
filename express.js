// with express

const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.get("/about", (req, res) => {
	res.send("About from Express");
});

app.use((req, res) => {
	res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
	console.log("Server running on http:localhost:3000");
});
