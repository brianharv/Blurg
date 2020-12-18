import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Chat = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Chat Screen</Text>
      <Button title="Back to Messages" onPress={() => {
        props.navigation.navigate('Messages')
      }}/>
    </View>
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