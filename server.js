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

/* ==========================
   HOME
========================== */

app.get("/", (req, res) => {
    res.render("index");
});

/* ==========================
   LOGIN
========================== */

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log("Login:", email, password);

    res.redirect("/");

});

/* ==========================
   SIGNUP
========================== */

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", (req, res) => {

    const {
        name,
        mobile,
        state,
        username,
        password
    } = req.body;

    console.log({
        name,
        mobile,
        state,
        username,
        password
    });

    res.redirect("/login");

});

/* ==========================
   PROFILE
========================== */

app.get("/profile", (req, res) => {

    res.render("profile");

});

/* ==========================
   BONUS
========================== */

app.get("/bonus", (req, res) => {

    res.render("bonus");

});

/* ==========================
   BET HISTORY
========================== */

app.get("/history", (req, res) => {

    res.render("history");

});

/* ==========================
   UPDATE PASSWORD
========================== */

app.get("/update-password", (req, res) => {

    res.send("Update Password Page");

});

/* ==========================
   LOGOUT
========================== */

app.get("/logout", (req, res) => {

    res.redirect("/login");

});

/* ==========================
   404
========================== */

app.use((req, res) => {

    res.status(404).send("404 - Page Not Found");

});

/* ==========================
   START SERVER
========================== */

app.listen(PORT, () => {

    console.log(`🚀 Server Running at http://localhost:${PORT}`);

});