import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipeName: {type: String, require: true},
  instructions: [{type: String}],
  category: {
    type: String,
    enum: [
      'Dessert',
      'Appetizer',
      'Main Dish',
      'Salad',
      'Meat',
      'Soup',
      'Vegan',
    ],
  },
  ingredients: [{type: mongoose.Types.ObjectId, ref: 'Ingredient'}],
});

export default mongoose.model('Recipe', recipeSchema);
