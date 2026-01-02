const Ingredient = require("../models/Ingredient");

// GET all ingredients (met limit & offset)
exports.getIngredients = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const offset = parseInt(req.query.offset) || 0;

        const ingredients = await Ingredient.find()
            .skip(offset)
            .limit(limit);

        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET single ingredient
exports.getIngredientById = async (req, res) => {
    try {
        const ingredient = await Ingredient.findById(req.params.id);

        if (!ingredient) {
            return res.status(404).json({ message: "Ingredient not found" });
        }

        res.json(ingredient);
    } catch (error) {
        res.status(400).json({ message: "Invalid ID" });
    }
};

// POST create ingredient
exports.createIngredient = async (req, res) => {
    try {
        const ingredient = new Ingredient(req.body);
        const savedIngredient = await ingredient.save();
        res.status(201).json(savedIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT update ingredient
exports.updateIngredient = async (req, res) => {
    try {
        const updatedIngredient = await Ingredient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedIngredient) {
            return res.status(404).json({ message: "Ingredient not found" });
        }

        res.json(updatedIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE ingredient
exports.deleteIngredient = async (req, res) => {
    try {
        const deletedIngredient = await Ingredient.findByIdAndDelete(req.params.id);

        if (!deletedIngredient) {
            return res.status(404).json({ message: "Ingredient not found" });
        }

        res.json({ message: "Ingredient deleted" });
    } catch (error) {
        res.status(400).json({ message: "Invalid ID" });
    }
};
