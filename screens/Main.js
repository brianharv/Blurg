import React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';
import Chat from './Chat';

const Main = () => {
  return (
    <View>
      <Text>This is the Main Screen</Text>
      <Button title="Go to Chat Screen"/>
    </View>
  )
}

// const styles = Stylesheet.create({});

export default Main;