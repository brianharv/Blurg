import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import KeyboardAvoid from '../components/KeyboardAvoid';


const Chat = props => {
  return (
    <View style={styles.screen}>
      
      <Text>This is the Chat Screen</Text>
      <Button title="Back to Messages" onPress={() => {
        props.navigation.navigate('Messages')
      }}/>
      <KeyboardAvoid />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default Chat;