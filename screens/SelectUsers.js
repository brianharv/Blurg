import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const SelectUsers = props => {

  const [enteredName, setEnteredName] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput 
        placeholder="enter your name"
        styles={styles.textInput}
      />
      <Button title="Start Chatting" onPress={() => {
        props.navigation.navigate('Chat')
      }}
      />
    </View>
  )
}

const offset = 24

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding:25
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  textInput:{
    flex: 1,
    backgroundColor: 'black'

  }
});

export default SelectUsers;