import {
    GraphQLSchema,
    GraphQLObjectType,
  } from 'graphql';
  

  import postQueries from './post/graphql/postQueries'
  import postMutations from './post/graphql/postMutations'

  
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        ...postQueries,
      }),
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => ({
        ...postMutations,
      }),
    }),
  });

  export default schema