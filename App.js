import React,  { useState } from 'react';
import ChatNavigator from './navigators/ChatNavigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee';

// const fetchFonts = () => {
//   Font.loadAsync({
//     'bungee-regular': require('./assets/fonts/Bungee-Regular.ttf')
//   });
// };
export default function App() {

  let [fontLoaded] = useFonts({
    Bungee_400Regular,
  });
  // const [fontLoaded, setFontLoaded] = useState(false);

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

