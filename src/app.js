const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
    <h1>Recepten API</h1>
    <p>
      Deze API laat toe om recepten en ingrediënten te beheren.</p>

    <h2>Ingredients</h2>
    <ul>
      <li>
        <strong>GET /api/ingredients</strong><br>
        Haalt een lijst van alle ingrediënten op.<br>
        <p>Optionele query parameters:</p>
        <ul>
          <li>limit – maximum aantal resultaten</li>
          <li>offset – startpositie voor paginatie</li>
          <li>search – zoeken op naam</li>
        </ul>
        
        <p>Voorbeelden:</p>
        <ul>
          <li>/api/ingredients?limit=5&offset=0</li>
          <li>/api/ingredients?search=tom</li>
        </ul>
      </li>
<br>
      <li>
        <strong>GET /api/ingredients/:id</strong><br>
        Haalt één ingrediënt op via zijn unieke ID.
      </li>

      <li>
        <strong>POST /api/ingredients</strong><br>
        Voegt een nieuw ingrediënt toe.<br>
        <pre>{
  "name": "Tomaat",
  "unit": "gram",
  "calories": 18
}</pre>
      </li>

      <li>
        <strong>PUT /api/ingredients/:id</strong><br>
        Past een bestaand ingrediënt aan.
      </li>

      <li>
        <strong>DELETE /api/ingredients/:id</strong><br>
        Verwijdert een ingrediënt.
      </li>
    </ul>

    <h2>Recipes</h2>
    <ul>
      <li>
        <strong>GET /api/recipes</strong><br>
        Haalt een lijst van alle recepten op.
      </li>

      <li>
        <strong>GET /api/recipes/:id</strong><br>
        Haalt één recept op inclusief gekoppelde ingrediënten.
      </li>

      <li>
        <strong>POST /api/recipes</strong><br>
        Voegt een nieuw recept toe met gekoppelde ingrediënten.
      </li>

      <li>
        <strong>PUT /api/recipes/:id</strong><br>
        Past een bestaand recept aan.
      </li>

      <li>
        <strong>DELETE /api/recipes/:id</strong><br>
        Verwijdert een recept.
      </li>
    </ul>
  `);
});


const ingredientRoutes = require("./routes/ingredientRoutes");
app.use("/api/ingredients", ingredientRoutes);

const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

module.exports = app;
