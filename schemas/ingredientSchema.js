import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    ingredients: [Ingredient]
    ingredient(id: ID!): Ingredient
  }

  type Ingredient {
    id: ID
    ingredientName: String!
    grams: Float
    nutrients: Nutrients
  }
  extend type Mutation {
    addIngredient(
      ingredientName: String!
      nutrients: ID
      grams: Float
    ): Ingredient
  }
`;
