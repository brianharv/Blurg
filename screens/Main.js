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
    backgroundColor:'#a8f0e6'
  },
  text: {
    marginTop: 50,
    padding: 25,
    fontFamily: 'Quicksand_400SemiBold',
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
    shadowRadius: 5,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: .5
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
    borderColor:'white',
    borderRadius: 15,
    alignSelf: 'center',
    margin: 10,
    shadowOpacity: .25,
    shadowOffset: {width:2, height: 1},
    shadowRadius: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  buttonInner: {
    alignItems: 'center'
    
  }
});

export default Main;