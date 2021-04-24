import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
    addRecipe: Recipe
  }

  extend type Mutation {
    addRecipe(
      recipeName: String!
      instructions: [String]
      ingredients: [ID]
    ): Recipe
  }

  type Recipe {
    id: ID!
    recipeName: String!
    ingredients: [Ingredient]
    instructions: [String]
  }
`;
