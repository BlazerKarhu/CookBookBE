import Ingredient from '../models/ingredient.js';

export default {
  Query: {
    ingredients: (parent, args) => {
      console.log('ingredients query', args);
      return Ingredient.find().populate('nutrients');
    },
  },
  Mutation: {
    addIngredient: (parent, args) => {
      console.log('add ingredient', args);
      const newIngredient = new Ingredient(args);
      return newIngredient.save();
    },
  },
};
