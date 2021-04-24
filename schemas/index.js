import {gql} from 'apollo-server-express';
import ingredientSchema from './ingredientSchema.js';
import nutrientsSchema from './nutrientsSchema.js';
import recipeSchema from './recipeSchema.js';
import userSchema from './userSchema.js';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  recipeSchema,
  ingredientSchema,
  nutrientsSchema,
];
