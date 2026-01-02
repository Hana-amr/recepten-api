const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
    <h1>Recepten API</h1>

    <h2>Ingredients</h2>
    <ul>
      <li>GET /api/ingredients</li>
      <li>GET /api/ingredients/:id</li>
      <li>POST /api/ingredients</li>
      <li>PUT /api/ingredients/:id</li>
      <li>DELETE /api/ingredients/:id</li>
    </ul>

    <h2>Recipes</h2>
    <ul>
      <li>GET /api/recipes</li>
      <li>GET /api/recipes/:id</li>
      <li>POST /api/recipes</li>
      <li>PUT /api/recipes/:id</li>
      <li>DELETE /api/recipes/:id</li>
    </ul>
  `);
});

const ingredientRoutes = require("./routes/ingredientRoutes");
app.use("/api/ingredients", ingredientRoutes);

const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

module.exports = app;
