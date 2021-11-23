import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { onAuthStateChanged } from 'firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { auth } from './firebase';
import Home from './screens/home/Home';
import Profile from './screens/profile/Profile';
import Guest from './screens/auth/Guest';
import Bookshelf from './screens/home/Bookshelf';
import Search from './screens/home/Search';

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
]);

const Tab = createBottomTabNavigator();

const configGradient = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState('');

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      setCurrentUser(true);
      setCurrentUserInfo(user);
    } else {
      setCurrentUser(false);
    }
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider config={configGradient}>
        <StatusBar style='light' />
        {!currentUser ? (
          <Guest />
        ) : (
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#6C63FF',
              headerShown: false,
              tabBarStyle: {
                backgroundColor: '#212121',
                borderTopWidth: 0,
                height: 60,
                paddingBottom: 8,
              },
            }}
          >
            <Tab.Screen
              name='Home'
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name='book' color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name='Search'
              component={Search}
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name='search1' color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name='Bookshelf'
              component={Bookshelf}
              options={{
                tabBarLabel: 'Bookshelf',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons
                    name='favorite-border'
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name='Profile'
              component={Profile}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name='person-outline' size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
