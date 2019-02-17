const { GraphQLServer } = require('graphql-yoga');

let idCount = 0;
const messages = [];

const resolvers = {
  Query: {
    description: () => `This is the API for a msgr app`,
    messages: () => messages,
    message: (parent, args) => messages.find(msg => msg.id === args.id),
  },
  Mutation: {
    createMessage: (parent, args) => {
      const message = {
        id: `msg_${idCount++}`,
        text: args.text,
        author: args.author,
        belongsIn: args.belongsIn
      }
      messages.push(message);
      return message;
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
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`));