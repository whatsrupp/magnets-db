import PostType from './postType'
import {
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';
  
import mongoose from 'mongoose'
import postSchema from '../mongo/postModel'
const Post = postSchema

async function resolveCreatePost(root, args, context, info) {
    const newPostObject = new Post(args)
    return newPostObject.save()
}

export const postMutations = {
    createPost: {
        type: PostType,
        args: {
            title: {
                type: GraphQLString
            },
            content: {
                type: GraphQLString
            }
        },
        resolve: resolveCreatePost
    }
}

export default postMutations
