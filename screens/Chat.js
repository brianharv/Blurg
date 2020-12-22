import React, {useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { StyleSheet } from 'react-native';


const Chat = props => {
 
  const userName = props.navigation.getParam('name');
  const selLang = props.navigation.getParam('language');




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


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      style={styles.screen}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

Chat.navigationOptions = navigationData => {
  const userName = navigationData.navigation.getParam('name');
  const selLang = navigationData.navigation.getParam('language');

  return {
    headerTitle: userName,
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#d3ebf5',
  },
})

export default Chat;


