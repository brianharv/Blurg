import React,  { useState } from 'react';
import ChatNavigator from './navigators/ChatNavigator';
import AppLoading from 'expo-app-loading';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee';
import { 
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold 
} from '@expo-google-fonts/quicksand';





export default function App() {

  let [fontLoaded] = useFonts({
    Bungee_400Regular,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold 
   
  });
 

  if(!fontLoaded) {
    return(
      <AppLoading
      // startAsync={fetchFonts}
      // onFinish={() => setFontLoaded(true)}
      // onError={console.warn}
      />
    );
  }
  return (
    <ChatNavigator />
  );
}

