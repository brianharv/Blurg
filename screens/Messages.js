import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Messages = props => {
  return (
    <View style={styles.screen}>
      <Text>Messages</Text>
      <Button title="New Message" onPress={() => {
        props.navigation.navigate('Name')
      }}
      />
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

export default Messages;