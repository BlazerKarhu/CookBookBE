import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  ingredientName: {type: String, required: true},
  nutrients: {type: mongoose.Types.ObjectId, ref: 'Nutrients'},
  grams: {type: Number},
});

export default mongoose.model('Ingredient', ingredientSchema);
