const recipeList = document.getElementById("recipe-list");
const recipeDetail = document.getElementById("recipe-detail");
const searchInput = document.getElementById("search");

let allRecipes = [];

// Alle recepten ophalen bij laden van de pagina
async function loadRecipes() {
    const response = await fetch("/api/recipes");
    allRecipes = await response.json();
    renderRecipeList(allRecipes);
}

// Lijst van recepten tonen (alleen titels)
function renderRecipeList(recipes) {
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        const li = document.createElement("li");
        li.textContent = recipe.title;
        li.style.cursor = "pointer";

        li.addEventListener("click", () => {
            showRecipeDetail(recipe._id);
        });

        recipeList.appendChild(li);
    });
}

// Detail van één recept ophalen en tonen
async function showRecipeDetail(recipeId) {
    const response = await fetch(`/api/recipes/${recipeId}`);
    const recipe = await response.json();

    recipeDetail.innerHTML = `
    <h2>${recipe.title}</h2>
    <p><strong>Instructies:</strong></p>
    <p>${recipe.instructions.replace(/\n/g, "<br>")}</p>

    <h3>Ingrediënten</h3>
    <ul>
      ${recipe.ingredients
        .map(i => `<li>${i.amount} ${i.ingredient.unit} ${i.ingredient.name}</li>`)
        .join("")}
    </ul>
  `;
}

// Zoekbalk (client-side filter)

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredRecipes = allRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchValue)
    );

    renderRecipeList(filteredRecipes);
});

// Start
loadRecipes();
