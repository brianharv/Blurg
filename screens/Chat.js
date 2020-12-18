import React from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ChatInput from '../components/ChatInput';

const DismissKeyboard = ({ children }) => {
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
};


const Chat = props => {

  return (
    <DismissKeyboard>
      <View style={styles.screen}>
        <Text>This is the Chat Screen</Text>
        <Button title="Back to Messages" onPress={() => {
          props.navigation.navigate('Messages')
        }}/>
        <ChatInput />
      </View>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
});

export default Chat;