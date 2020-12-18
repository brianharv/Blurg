import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';

const KeyboardAvoid = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput placeholder="write something" style={styles.textInput} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '90%',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  }
});

export default KeyboardAvoid;