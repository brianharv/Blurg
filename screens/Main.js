import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Main = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Main Screen</Text>
      <Button title="Go to Chat Screen" onPress={() => 
      {props.navigation.navigate('Chat')}}
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

export default Main;