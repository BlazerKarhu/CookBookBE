import Recipe from '../models/recipe.js';

export default {
  Query: {
    recipes: async (parent, args) => {
      try {
        console.log('recipes query', args);
        return Recipe.find().populate({
          path: 'ingredients',
          populate: {path: 'nutrients'},
        });
      } catch (error) {
        console.error(error);
      }
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
