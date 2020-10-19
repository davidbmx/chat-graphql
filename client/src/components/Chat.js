import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    useMutation,
    gql,
  } from "@apollo/client";
// import { WebSocketLink } from "@apollo/client/link/ws";

// const link = new WebSocketLink({
//     uri: `ws://localhost:4000/`,
//     options: {
//       reconnect: true,
//     },
// });

const client = new ApolloClient({
    // link,
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});


const GET_CHATS = gql`
  query GetChats($uid: String!) {
    getChats(uid: $uid) {
      _id
      users
      users_populate
    }
  }
`;

const GET_MESSAGES = gql`
  query($chatId: String!){
    getMessages(chatId: $chatId) {
      _id
      message
      timestamp
      type_message
      type_sender
      uid
      chat
    }
  }
`;


const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;


const Chat = () => {
  const { loading, error, data } = useQuery(GET_CHATS, {
    variables: { uid: '1123'}
  })
  if (loading) {
    return <h1>Loading...</h1>
  }
  console.log(data);
  return (
      <div>
          {
            data.getChats.map(item => (
              <p>{item._id}</p>
            ))
          }
      </div>
  )
}

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
