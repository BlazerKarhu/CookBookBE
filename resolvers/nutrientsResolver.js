import Nutrients from '../models/nutrients.js';

export default {
  Query: {
    nutrients: (parent, args) => {
      return Nutrients.find();
    },
  },
  Mutation: {
    addNutrients: (parents, args) => {
      console.log('addNutrients', args);
      const newNutrients = new Nutrients(args);
      return newNutrients.save();
    },
  },
};
