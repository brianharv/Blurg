import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from '../screens/Main';
import Chat from '../screens/Chat';
import SelectUsers from '../screens/SelectUsers';
import Login from "../screens/Login";
import Colors from '../constants/Colors';
import Messages from '../screens/Messages';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const ChatNavigator = createStackNavigator({
  Main: Main,
  Users: SelectUsers,
  Login: Login,
  Messages: Messages,
  Chat: Chat
}, {
  defaultNavigationOptions: defaultStackNavOptions
});




export default createAppContainer(ChatNavigator);
