import Ingredient from '../models/ingredient.js';

export default {
  Query: {
    ingredients: (parent, args) => {
      Ingredient.find();
    },
  },
  Mutation: {
    addIngredient: (parent, args) => {
      console.log(args);
      const newIngredient = new Ingredient(args);
      return newIngredient.save();
    },
  },
};
