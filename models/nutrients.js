import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const nutrientsSchema = new Schema({
  energykcal: {type: Number},
  water: {type: Number},
  protein: {type: Number},
  carbs: {type: Number},
  sugars: {type: Number},
  fat: {type: Number},
  saturatedfat: {type: Number},
  monosaturatedfat: {type: Number},
  polyunsaturatedfat: {type: Number},
  cholesterol: {type: Number},
  fibers: {type: Number},
});

export default mongoose.model('Nutrients', nutrientsSchema);
