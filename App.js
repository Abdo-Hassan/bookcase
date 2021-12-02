import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Guest from './screens/auth/Guest';
import BottomNavigation from './views/BottomNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from './screens/ReviewDetails';
import { secondaryColor, textColor } from './constants/Colors';

const Stack = createStackNavigator();

// set default color mode
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
]);

const configGradient = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  const [currentUser, setCurrentUser] = useState(true);
  const [currentUserInfo, setCurrentUserInfo] = useState('');

  // firebase listen to user
  // onAuthStateChanged(auth, (user) => {
  //   if (user != null) {
  //     setCurrentUser(true);
  //     setCurrentUserInfo(user);
  //   } else {
  //     setCurrentUser(false);
  //   }
  // });

  return (
    <NavigationContainer>
      <NativeBaseProvider config={configGradient} theme={customTheme}>
        <StatusBar style='light' />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!currentUser ? (
            <Stack.Screen name='guest' component={Guest} />
          ) : (
            <>
              <Stack.Screen name='home' component={BottomNavigation} />
              <Stack.Screen
                name='reviews'
                options={{
                  headerTintColor: '#fff',
                  title: 'Reviews',
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: secondaryColor,
                  },
                }}
                component={ReviewDetails}
              />
            </>
          )}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
