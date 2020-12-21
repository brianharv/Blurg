import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


const Main = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Welcome to Blurg</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Button
            style={styles.buttonInner}
            title="Start Talking" onPress={() => 
            {props.navigation.navigate('Name')}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}> 
            <Button
            style={styles.buttonInner}
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
  },
  text: {
    marginTop: 50,
    padding: 25,
    fontFamily: 'Bungee_400Regular',
    fontSize: 30,
    alignSelf: 'center'
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
    borderRadius: 15,
    alignSelf: 'center',
    margin: 10,
    shadowOpacity: .25,
    shadowOffset: {width:3, height: 3},
    shadowRadius: 25,
    justifyContent: 'flex-end',
    backgroundColor: '#ccc'
  },
  buttonInner: {
    alignItems: 'center'
    
  }
});

export default Main;