require("dotenv").config();
console.clear();
const express = require("express");
const mongoose = require("mongoose");

//connexion à la bdd
mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(express.json());

//import des routes users et offers
const usersRoutes = require("./routes/users");
app.use(usersRoutes);
const offersRoutes = require("./routes/offers");
app.use(offersRoutes);

app.all("*", (req, res) => {
  res.status(400).json("Route introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("server has started");
});
