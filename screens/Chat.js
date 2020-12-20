import React, {useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';


const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey dude',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Randy',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  // const onSend = useCallback((messages = []) => {
  //   setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  // }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Chat;


