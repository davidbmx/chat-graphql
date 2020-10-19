const typeDefs = `
    type User {
        _id: ID!
        full_name: String!
        image: String!
        uid: String!
    }

    type Message {
        _id: ID!
        message: String!
        timestamp: String!
        type_message: String!
        type_sender: String!
        uid: String!
        chat: String!
        read: Boolean!
    }

    type StoreData {
        storeId: ID!
        image: String!
        name: String!
    }

    type Chat {
        _id: ID!
        clientUid: String,
        store: StoreData,
        users: [String]
        client: User
    }

    type Query {
        getUsers: [User!]
        getChats(uid: String!): [Chat]
        getMessages(chatId: String!): [Message]
        getMessagesNoRead(uid: String!): Int!
    }

    type Mutation {
        createUser(full_name: String! image: String! uid: String!): User!
        createChat(users: [String] clientUid: String! storeId: Int! imageStore: String! storeName: String!): Chat!
        createMessage(message: String! type_message: String! type_sender: String! uid: String! chat: String!): Message!
        setReadMessage(messageId: String!): Boolean!
    }

`;

module.exports = typeDefs;
