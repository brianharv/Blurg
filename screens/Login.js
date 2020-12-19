import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

const Login = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Login Screen</Text>
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

const styles = StyleSheet.create({});

export default Login;
