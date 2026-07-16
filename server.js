const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
    res.render("index");
});

// Login Page
app.get("/login", (req, res) => {
    res.render("login");
});

// Signup Page
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Login Form
app.post("/login", (req, res) => {
    res.send("Login Successful");
});

// Signup Form
app.post("/signup", (req, res) => {
    res.send("Signup Successful");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});