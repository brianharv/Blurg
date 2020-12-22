import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import firebaseSDK from '../firebase';


const NameAndLanguage = props => {

  const [enteredName, setEnteredName] = useState('');
  const [selectedValue, setSelectedValue] = useState('es');

  const nameInputHandler = enteredName => {
    setEnteredName(enteredName)
  }

  const handleLanguageChoice = (inputValue) => {
    setSelectedValue(inputValue);
  };

  return (
    <View style={styles.screen}>
      {/* <Text style={styles.title}>Enter Your Name</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="enter your name"
          style={styles.textInput}
          onChangeText={nameInputHandler}
          defaultValue={enteredName}
        />
      </View> */}
      <Text style={styles.text}>Select the language you would like your text to be translated to.</Text>  
      <Picker
        style={styles.pickerContainer}
        selectedValue={selectedValue}
        onValueChange={handleLanguageChoice}
      >
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="Italian" value="it" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="French" value="fr" />
      </Picker>
      <TouchableOpacity
        style={styles.button} 
        onPress={() => {
        props.navigation.navigate('Chat', {
          name: enteredName,
          language: selectedValue
          });
        }}
        >
        <Text style={styles.text}>Start Blurg</Text>
      </TouchableOpacity> 

    </View>

  );
}


const offset = 24

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d3ebf5',
    alignItems: 'center',
  },
  title: {
    width: '75%',
    marginTop: 50,
    fontFamily: 'Bungee_400Regular',
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    width: '72%',
    fontFamily: 'Bungee_400Regular',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 25
    
  },
  textInput:{
    flexDirection: 'row',
    width: 250,
    borderColor: 'black',
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30
  },
  pickerContainer: {
    height: 20,
    width: 250,
  },
  button: {
    backgroundColor: "#168ec9",
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 300,
    alignItems: 'center',
    paddingHorizontal: 20
  }
});

export default NameAndLanguage;