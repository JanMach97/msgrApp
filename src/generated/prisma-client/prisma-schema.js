module.exports = {
        typeDefs: /* GraphQL */ `type AggregateChannel {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateServer {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Channel {
  id: ID!
  name: String!
  public: Boolean!
  belongsIn: Server!
}

type ChannelConnection {
  pageInfo: PageInfo!
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  name: String!
  public: Boolean!
  belongsIn: ServerCreateOneInput!
}

input ChannelCreateOneInput {
  create: ChannelCreateInput
  connect: ChannelWhereUniqueInput
}

type ChannelEdge {
  node: Channel!
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  public_ASC
  public_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  name: String!
  public: Boolean!
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
  AND: [ChannelSubscriptionWhereInput!]
  OR: [ChannelSubscriptionWhereInput!]
  NOT: [ChannelSubscriptionWhereInput!]
}

input ChannelUpdateDataInput {
  name: String
  public: Boolean
  belongsIn: ServerUpdateOneRequiredInput
}

input ChannelUpdateInput {
  name: String
  public: Boolean
  belongsIn: ServerUpdateOneRequiredInput
}

input ChannelUpdateManyMutationInput {
  name: String
  public: Boolean
}

input ChannelUpdateOneRequiredInput {
  create: ChannelCreateInput
  update: ChannelUpdateDataInput
  upsert: ChannelUpsertNestedInput
  connect: ChannelWhereUniqueInput
}

input ChannelUpsertNestedInput {
  update: ChannelUpdateDataInput!
  create: ChannelCreateInput!
}

input ChannelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  public: Boolean
  public_not: Boolean
  belongsIn: ServerWhereInput
  AND: [ChannelWhereInput!]
  OR: [ChannelWhereInput!]
  NOT: [ChannelWhereInput!]
}

input ChannelWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  createdAt: DateTime!
  text: String!
  author: User!
  belongsIn: Channel!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  text: String!
  author: UserCreateOneInput!
  belongsIn: ChannelCreateOneInput!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
  author: UserUpdateOneRequiredInput
  belongsIn: ChannelUpdateOneRequiredInput
}

input MessageUpdateManyMutationInput {
  text: String
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  belongsIn: ChannelWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChannel(data: ChannelCreateInput!): Channel!
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  updateManyChannels(data: ChannelUpdateManyMutationInput!, where: ChannelWhereInput): BatchPayload!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createServer(data: ServerCreateInput!): Server!
  updateServer(data: ServerUpdateInput!, where: ServerWhereUniqueInput!): Server
  updateManyServers(data: ServerUpdateManyMutationInput!, where: ServerWhereInput): BatchPayload!
  upsertServer(where: ServerWhereUniqueInput!, create: ServerCreateInput!, update: ServerUpdateInput!): Server!
  deleteServer(where: ServerWhereUniqueInput!): Server
  deleteManyServers(where: ServerWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  channel(where: ChannelWhereUniqueInput!): Channel
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  server(where: ServerWhereUniqueInput!): Server
  servers(where: ServerWhereInput, orderBy: ServerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Server]!
  serversConnection(where: ServerWhereInput, orderBy: ServerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServerConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Server {
  id: ID!
  name: String!
  owner: User!
}

type ServerConnection {
  pageInfo: PageInfo!
  edges: [ServerEdge]!
  aggregate: AggregateServer!
}

input ServerCreateInput {
  name: String!
  owner: UserCreateOneWithoutServerInput!
}

input ServerCreateManyWithoutOwnerInput {
  create: [ServerCreateWithoutOwnerInput!]
  connect: [ServerWhereUniqueInput!]
}

input ServerCreateOneInput {
  create: ServerCreateInput
  connect: ServerWhereUniqueInput
}

input ServerCreateWithoutOwnerInput {
  name: String!
}

type ServerEdge {
  node: Server!
  cursor: String!
}

enum ServerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ServerPreviousValues {
  id: ID!
  name: String!
}

input ServerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ServerScalarWhereInput!]
  OR: [ServerScalarWhereInput!]
  NOT: [ServerScalarWhereInput!]
}

type ServerSubscriptionPayload {
  mutation: MutationType!
  node: Server
  updatedFields: [String!]
  previousValues: ServerPreviousValues
}

input ServerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ServerWhereInput
  AND: [ServerSubscriptionWhereInput!]
  OR: [ServerSubscriptionWhereInput!]
  NOT: [ServerSubscriptionWhereInput!]
}

input ServerUpdateDataInput {
  name: String
  owner: UserUpdateOneRequiredWithoutServerInput
}

input ServerUpdateInput {
  name: String
  owner: UserUpdateOneRequiredWithoutServerInput
}

input ServerUpdateManyDataInput {
  name: String
}

input ServerUpdateManyMutationInput {
  name: String
}

input ServerUpdateManyWithoutOwnerInput {
  create: [ServerCreateWithoutOwnerInput!]
  delete: [ServerWhereUniqueInput!]
  connect: [ServerWhereUniqueInput!]
  set: [ServerWhereUniqueInput!]
  disconnect: [ServerWhereUniqueInput!]
  update: [ServerUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ServerUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ServerScalarWhereInput!]
  updateMany: [ServerUpdateManyWithWhereNestedInput!]
}

input ServerUpdateManyWithWhereNestedInput {
  where: ServerScalarWhereInput!
  data: ServerUpdateManyDataInput!
}

input ServerUpdateOneRequiredInput {
  create: ServerCreateInput
  update: ServerUpdateDataInput
  upsert: ServerUpsertNestedInput
  connect: ServerWhereUniqueInput
}

input ServerUpdateWithoutOwnerDataInput {
  name: String
}

input ServerUpdateWithWhereUniqueWithoutOwnerInput {
  where: ServerWhereUniqueInput!
  data: ServerUpdateWithoutOwnerDataInput!
}

input ServerUpsertNestedInput {
  update: ServerUpdateDataInput!
  create: ServerCreateInput!
}

input ServerUpsertWithWhereUniqueWithoutOwnerInput {
  where: ServerWhereUniqueInput!
  update: ServerUpdateWithoutOwnerDataInput!
  create: ServerCreateWithoutOwnerInput!
}

input ServerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  owner: UserWhereInput
  AND: [ServerWhereInput!]
  OR: [ServerWhereInput!]
  NOT: [ServerWhereInput!]
}

input ServerWhereUniqueInput {
  id: ID
}

type Subscription {
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  server(where: ServerSubscriptionWhereInput): ServerSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  firstname: String!
  lastname: String!
  password: String!
  email: String!
  server(where: ServerWhereInput, orderBy: ServerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Server!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  firstname: String!
  lastname: String!
  password: String!
  email: String!
  server: ServerCreateManyWithoutOwnerInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutServerInput {
  create: UserCreateWithoutServerInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutServerInput {
  username: String!
  firstname: String!
  lastname: String!
  password: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  firstname: String!
  lastname: String!
  password: String!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  username: String
  firstname: String
  lastname: String
  password: String
  email: String
  server: ServerUpdateManyWithoutOwnerInput
}

input UserUpdateInput {
  username: String
  firstname: String
  lastname: String
  password: String
  email: String
  server: ServerUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  username: String
  firstname: String
  lastname: String
  password: String
  email: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutServerInput {
  create: UserCreateWithoutServerInput
  update: UserUpdateWithoutServerDataInput
  upsert: UserUpsertWithoutServerInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutServerDataInput {
  username: String
  firstname: String
  lastname: String
  password: String
  email: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutServerInput {
  update: UserUpdateWithoutServerDataInput!
  create: UserCreateWithoutServerInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  server_every: ServerWhereInput
  server_some: ServerWhereInput
  server_none: ServerWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    