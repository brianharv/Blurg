import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Main = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Main Screen</Text>
      <View style={styles.button}>
        <Button title="Start Talking" onPress={() => 
        {props.navigation.navigate('Messages')}}
        />
      </View>
      <View style={styles.button}>
        <Button title="Login" onPress={() => 
        {props.navigation.navigate('Login')}}
        />
      </View>
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