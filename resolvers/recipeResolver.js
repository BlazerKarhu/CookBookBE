import Recipe from '../models/recipe.js';

export default {
  Query: {
    recipes: (parent, args) => {
      Recipe.find();
    },
  },
  Mutation: {
    addRecipe: (parent, args) => {
      console.log(args);
      const newRecipe = new Recipe(args);
      return newRecipe.save();
    },
  },
};
