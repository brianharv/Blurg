import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';


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
      <Text style={styles.title}>Enter Your Name</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="enter your name"
          style={styles.textInput}
          onChangeText={nameInputHandler}
          defaultValue={enteredName}
        />
      </View>
      <View style={styles.text}>
          <Text>Select the language you would like your text to be translated to. {console.log(enteredName)}</Text>  
      </View>  
      <Picker
        style={styles.pickerContainer}
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
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
        <Text>Start Blerging</Text>
      </TouchableOpacity> 

    </View>

  );
}


const offset = 24

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-evenly'
  },
  title: {
    width: '50%',
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
    justifyContent: 'center'
  },
  text: {
    width: '60%',
    justifyContent: 'center',
    textAlign: 'justify'
    
  },
  textInput:{
    flexDirection: 'row',
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    marginTop: 30,
    marginBottom: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#168ec9",
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-end'
  }
});

export default NameAndLanguage;