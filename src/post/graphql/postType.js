import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import GraphQLDate from 'graphql-date';

const postType = new GraphQLObjectType(
    {
        name: "Post",
        description: "A Blog Post",
        fields: {
            title: {
                type: GraphQLString,
                description: "Tht title of the blog post"
            },
            content: {
                type: GraphQLString,
                description: "The text of a blog post"
            },
            updated: {
                type: GraphQLDate,
                description: "Time of last post update"
            },
            _id:{
                type: GraphQLString,
                description: "Unique Id of blog post"
            },
        } 
    }
)

export default postType