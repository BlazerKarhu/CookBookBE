import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    ingredients: [Ingredient]
    ingridient(id: ID!): Ingredient
  }
  extend type Mutation {
    addIngredient(ingredientName: String!): Ingredient
  }

  type Ingredient {
    id: ID!
    ingredientName: String!
    nutrients: Nutrients
  }
`;
