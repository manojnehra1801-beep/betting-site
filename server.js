const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const match = {
  team1: "India",
  team2: "Australia",
  odds1: 1.75,
  odds2: 2.10,
  status: "Demo Match"
};

app.get("/", (req, res) => {
  res.render("index", { match });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});