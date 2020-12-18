import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard  } from 'react-native';

const KeyboardAvoid = () => {
  return (
    <KeyboardAvoidingView
      style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
      behavior="position"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput 
            placeholder="write something" 
            style={styles.textInput} 
            returnKeyType="send"
            />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1
  },
  textInput: {
    flexDirection: 'column',
    
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '90%',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderBottomWidth: 1,
  }
});

export default KeyboardAvoid;