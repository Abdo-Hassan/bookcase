import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getBooks } from './firebase';
import Guest from './screens/auth/Guest';
import BottomNavigation from './views/BottomNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from './screens/reviews/ReviewDetails';
import { secondaryColor, textColor } from './constants/Colors';
import CommentSection from './screens/reviews/CommentSection';
import Loading from './components/Loading';

const Stack = createStackNavigator();

// set default color mode
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
  'Setting a timer for a long period of time',
]);

const configGradient = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUserInfo, setCurrentUserInfo] = useState('');
  console.log('App - currentUserInfo', currentUserInfo);

  useEffect(() => {
    getBooks();
  }, []);

  const handleScreens = () => {
    if (!loading) {
      return (
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
              <Stack.Screen
                name='comment'
                options={{
                  headerTintColor: '#fff',
                  title: 'Comments',
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: secondaryColor,
                  },
                }}
                component={CommentSection}
              />
            </>
          )}
        </Stack.Navigator>
      );
    } else {
      return <Loading />;
    }
  };

  // firebase listen to user
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      setCurrentUser(true);
      setLoading(false);
      setCurrentUserInfo(user);
    } else {
      setLoading(false);
      setCurrentUser(false);
    }
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider config={configGradient} theme={customTheme}>
        <StatusBar style='light' />
        {handleScreens()}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
