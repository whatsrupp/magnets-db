import PostType from './postType'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
  } from 'graphql';
  
import mongoose from 'mongoose'
import postSchema from '../mongo/postModel'

const Posts = postSchema

async function resolvePost(parent, args){
    return await Posts.findById(args._id)
}

async function resolvePosts(parent, args) {
    return await Posts.find({})
}

export const postQueries = {
    post:{
        type: PostType,
        args: {
            _id:{
                type: GraphQLString
            } 
        },
        resolve: resolvePost
    },
    posts:{
        type: new GraphQLList(PostType),
        resolve: resolvePosts
    }
}

export default postQueries