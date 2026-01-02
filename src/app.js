const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
    <h1>Recepten API</h1>
    <ul>
      <li>GET /api/recipes</li>
      <li>POST /api/recipes</li>
    </ul>
  `);
});
const ingredientRoutes = require("./routes/ingredientRoutes");

app.use("/api/ingredients", ingredientRoutes);

module.exports = app;
