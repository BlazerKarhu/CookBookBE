import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
    addRecipe: Recipe
  }

  type Recipe {
    id: ID!
    recipeName: String!
    instructions: [String]
    ingredients: [Ingredient]
    category: String
  }
  extend type Mutation {
    addRecipe(
      recipeName: String!
      instructions: String
      ingredients: [ID]
      category: String
    ): Recipe
  }
`;
