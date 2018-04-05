import { db } from "/setupMongoose";

const prepare = (o) => {
    o._id = o._id.toString()
    return o
}

const Posts = db.collections('posts');

const resolvers = {
    Query: {
      post: async (root, {_id}) => {
        return prepare(await Posts.findOne(ObjectId(_id)))
      },
      posts: async () => {
        return (await Posts.find({}).toArray()).map(prepare)
      },
    },
    
    Mutation: {
      createPost: async (root, args, context, info) => {
        const res = await Posts.insert(args)
        return prepare(await Posts.findOne({_id: res.insertedIds[1]}))
      },
    },
}

export default resolvers;