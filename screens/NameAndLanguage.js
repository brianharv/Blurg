import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
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
      <View>
          <Text>Select the language you would like your text to be translated to. {console.log(enteredName)}</Text>  
      </View>  
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={handleLanguageChoice}
        >
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="Italian" value="it" />
          <Picker.Item label="German" value="de" />
          <Picker.Item label="French" value="fr" />
        </Picker>
      </View>

      <View> 
        <Button 
          style={styles.button} 
          title="Start Chatting" 
          onPress={() => {
          props.navigation.navigate('Chat', {
            name: enteredName,
            language: selectedValue
            });
          }}
        />
      </View>
    </View>

  );
}


const offset = 24

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  title: {
    width: '50%',
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
    justifyContent: 'center'
  },
  textInput:{
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
  },
  pickerContainer: {
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
    alignItems: 'flex-end'
  }
});

export default NameAndLanguage;