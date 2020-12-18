import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SelectUsers = props => {
  return (
    <View style={styles.screen}>
      <Text>Select Users Screen</Text>
      <Button title="Start Chatting" onPress={() => {
        props.navigation.navigate('Chat')
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

export default SelectUsers;