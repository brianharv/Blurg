import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from '../screens/Main';
import Chat from '../screens/Chat';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const ChatNavigator = createStackNavigator({
  Main: {screen: Main},
  Chat: {screen: Chat}
}, {
  defaultNavigationOptions: defaultStackNavOptions
});


export default createAppContainer(ChatNavigator);
