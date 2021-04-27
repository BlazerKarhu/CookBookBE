import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    nutrients: [Nutrients]
    nutrient(id: ID!): Nutrients
    addNutrients: Nutrients
  }

  type Nutrients {
    id: ID!
    energykcal: Float
    water: Float
    protein: Float
    carbs: Float
    sugars: Float
    fat: Float
    saturatedfat: Float
    monosaturatedfat: Float
    polyunsaturatedfat: Float
    cholesterol: Float
    fibers: Float
  }
  input NutrientsIn {
    id: ID!
    energykcal: Float
    water: Float
    protein: Float
    carbs: Float
    sugars: Float
    fat: Float
    saturatedfat: Float
    monosaturatedfat: Float
    polyunsaturatedfat: Float
    cholesterol: Float
    fibers: Float
  }
  extend type Mutation {
    addNutrients(
      energykcal: Float
      water: Float
      protein: Float
      carbs: Float
      sugars: Float
      fat: Float
      saturatedfat: Float
      monosaturatedfat: Float
      polyunsaturatedfat: Float
      cholesterol: Float
      fibers: Float
    ): Nutrients
  }
`;
