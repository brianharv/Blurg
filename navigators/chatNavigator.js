import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from '../screens/Main';
import Chat from '../screens/Chat';

const ChatNavigator = createStackNavigator({
  Main: {screen: Main},
  Chat: {screen: Chat}
});


export default createAppContainer(ChatNavigator);
