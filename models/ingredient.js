import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  ingredientName: {type: String},
  nutrientsID: {type: mongoose.Types.ObjectId, ref: 'Nutrients'},
});

export default mongoose.model('Ingredient', ingredientSchema);
