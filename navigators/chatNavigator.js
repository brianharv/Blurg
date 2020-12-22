import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from '../screens/Main';
import Chat from '../screens/Chat';
import Login from "../screens/Login";
import Colors from '../constants/Colors';
import NameAndLanguage from '../screens/NameAndLanguage';
import Signup from '../screens/Signup';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#168ec9',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontFamily: 'Bungee_400Regular',
  
  }
}

const ChatNavigator = createStackNavigator({
  Blurg: Main,
  Name: NameAndLanguage,
  Chat: Chat,
  Login: Login,
  Signup: Signup
}, {
  defaultNavigationOptions: defaultStackNavOptions
});




export default createAppContainer(ChatNavigator);
