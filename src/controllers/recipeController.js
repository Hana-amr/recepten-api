const Recipe = require("../models/Recipe");

// GET /api/recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate("ingredients.ingredient");
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/recipes/:id
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id).populate(
            "ingredients.ingredient"
        );

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.json(recipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// POST /api/recipes
exports.createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT /api/recipes/:id
exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.json(recipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE /api/recipes/:id
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.json({ message: "Recipe deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
