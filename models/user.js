import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, unique: true},
  password: {type: String, required: true},
  full_name: {type: String, required: true},
  recipeID: {type: mongoose.Types.ObjectId, ref: 'Recipe'},
});

export default mongoose.model('User', userSchema);
