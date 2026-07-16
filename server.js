const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ===========================
   ROUTES
=========================== */

// Home
app.get("/", (req, res) => {
    res.render("index");
});

// Login Page
app.get("/login", (req, res) => {
    res.render("login");
});

// Login Form
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    res.redirect("/");
});

// Signup Page
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Signup Form
app.post("/signup", (req, res) => {

    const {
        name,
        mobile,
        state,
        username,
        password
    } = req.body;

    console.log(req.body);

    res.redirect("/login");

});

// Profile Page
app.get("/profile", (req, res) => {

    res.render("profile");

});

// Update Password Page
app.get("/update-password", (req, res) => {

    res.send("Update Password Page");

});

// Bet History Page
app.get("/history", (req, res) => {

    res.send("Bet History");

});

// Logout
app.get("/logout", (req, res) => {

    res.redirect("/login");

});

// 404 Page
app.use((req, res) => {

    res.status(404).send("404 Page Not Found");

});

// Start Server
app.listen(PORT, () => {

    console.log(`🚀 Server Running on http://localhost:${PORT}`);

});