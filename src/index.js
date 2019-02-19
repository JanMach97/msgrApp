const { GraphQLServer } = require('graphql-yoga');
const {prisma} = require('./generated/prisma-client');

const resolvers = {
  Query: {
    description: () => `This is the API for a msgr app`,
    messages: (root, args, context,info) => context.prisma.messages(),
    message: (parent, args, context, inffo) => context.prisma.messages(),
  },
  Mutation: {
    createMessage: (parent, args, context) => {
      return context.prisma.createMessage({
        text: args.text,
        author: args.author,
        belongsIn: args.belongsIn,

      })
    },
    deleteMessage: (parent, args) => {
      const messageIndex = messages.findIndex(msg => msg.id === args.id);
      if(messageIndex > -1) {
        const deleted = messages.splice(messageIndex, 1);
        return deleted[0];
      }
      return null;
    },
    UpdateMessage: (parent,args) => {
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {prisma},
})

server.start(() => console.log(`The server is running on http://localhost:4000`));