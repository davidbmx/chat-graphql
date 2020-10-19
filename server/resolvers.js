// const { PubSub, withFilter } = require("graphql-yoga");
const User = require('./models/User');
const Message = require('./models/Message');
const Chat = require('./models/Chat');

const resolvers = {
    Query: {
      getUsers: () => User.find({}),
      getChats: (root, { uid }) => Chat.find({clientUid: uid}),
      getMessages: (root, {chatId}) => Message.find({'chat._id': chatId}),
      getMessagesNoRead: (root, { uid }) => Message.find({uid: "1", read: false}).estimatedDocumentCount()
    },

    Chat: {
      client: ({ clientUid }) => {
        return User.findOne({ uid: clientUid });
      }
    },

    Mutation: {
      createUser: async (root, {full_name, image, uid}) => {
        const user = new User({full_name, image, uid});
        await user.save();
        return user;
      },
      createChat: async (root, { users, clientUid, storeId, imageStore, storeName }) => {
        const chat = new Chat({
          users,
          clientUid,
          store: {
            storeId,
            image: imageStore,
            name: storeName
          }
        });
        await chat.save();
        return chat;
      },
      createMessage: async (root, {message, type_message, type_sender, uid, chat}) => {
        const newMessage = new Message({message, type_message, type_sender, uid, chat});
        await newMessage.save();
        return newMessage;
      },
      setReadMessage: async (root, { messageId }) => {
        const message = await Message.findById(messageId);
        message.read = true;
        await message.save();
        return true
      }
    }
};

// const pubsub = new PubSub();

module.exports = {resolvers};

