import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';


const Chat = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Chat Screen</Text>
      <Button title="Back to Messages" onPress={() => {
        props.navigation.navigate('Messages')
      }}/>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="write something"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10
  } ,
  textInput: {
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'black'
  }
})

export default Chat;