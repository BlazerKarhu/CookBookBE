import Nutrients from '../models/nutrients.js';

export default {
  Query: {
    nutrients: (parent, args) => {
      Nutrients.find();
    },
  },
};
