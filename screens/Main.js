import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';



const Main = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Welcome to Blurg</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Button
            color='black'
            title="Start Talking" onPress={() => 
            {props.navigation.navigate('Name')}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}> 
            <Button
            color='black'
            title="Login" onPress={() => 
            {props.navigation.navigate('Login')}}
            />
          </TouchableOpacity>
        </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d3ebf5',
  },
  text: {
    marginTop: 50,
    padding: 25,
    fontFamily: 'Bungee_400Regular',
    fontSize: 40,
    alignSelf: 'center',
    textAlign: 'center',
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: .2
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor:'black',
    borderRadius: 15,
    alignSelf: 'center',
    margin: 10,
    shadowOpacity: .25,
    shadowOffset: {width: 2, height: 10},
    shadowRadius: 10,
    justifyContent: 'flex-end',
    backgroundColor: "#168ec9"
  }
});

export default Main;