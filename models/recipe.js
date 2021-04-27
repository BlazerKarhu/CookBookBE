import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipeName: {type: String, require: true},
  instructions: [{type: String}],
  ingredients: [{type: mongoose.Types.ObjectId, ref: 'Ingredient'}],
});

export default mongoose.model('Recipe', recipeSchema);
