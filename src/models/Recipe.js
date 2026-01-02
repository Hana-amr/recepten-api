const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        instructions: {
            type: String,
            required: true
        },
        ingredients: [
            {
                ingredient: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Ingredient",
                    required: true
                },
                amount: {
                    type: Number,
                    required: true
                }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
