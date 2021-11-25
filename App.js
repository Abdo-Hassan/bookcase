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
import Bookshelf from './screens/Bookshelf';
import Search from './screens/Search';

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
                backgroundColor: '#1f1f1f',
                borderTopWidth: 0,
                height: 55,
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
                  <AntDesign name='book' color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name='Search'
              component={Search}
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name='search1' color={color} size={24} />
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
                    size={24}
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
                  <Ionicons name='person-outline' size={24} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
