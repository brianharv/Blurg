import React, { useState } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

const ChatInput = props => {

  const [enteredText, setEnteredText] = useState('');

  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholder="write something..."
        onChangeText={textInputHandler}
        value={enteredText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: 'flex-end',
    padding: 10,
    marginBottom: 25
  },
  input: {
    borderRadius: 10,
    fontSize: 20,
    shadowOffset: {5: 10}
  }
});

export default ChatInput;