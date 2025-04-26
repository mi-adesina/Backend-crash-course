// with express

const express = require("express");
const { Pool } = require("pg");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.get("/about", (req, res) => {
	res.send("About from Express");
});

// Building a REST API
// GET all users
app.get("/api/users", (req, res) => {
	res.json([{ id: 1, name: "Alice" }]);
});
// Post a new user
app.post("/api/user", express.json(), (req, res) => {
	const user = req.body;
	// save the details to database
	res.status(201).json(user);
});
// Put (update) a user
app.put("/api/user/:id", (req, res) => {
	const id = res.params.id;
	res.json({ id, name: "Updated User" });
});
//  DELETE a user
app.delete("/api/user/:id", (req, res) => {
	res.status(204).send();
});

// Working with Databases
// PostgreSQL
// const { Pool } = require('pg');
const pool = new Pool({
	user: "postgre",
	host: "localhost",
	database: "mydb",
	password: "password",
	port: 5432,
});

// pool.query("SELECT * FROM users", (err, result) => {
// 	console.log(result.rows);
// });

app.use((req, res) => {
	res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
	console.log("Server running on http:localhost:3000");
});
