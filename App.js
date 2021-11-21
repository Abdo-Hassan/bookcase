import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Bookshelf from './screens/Bookshelf';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider config={config}>
        <StatusBar style='light' />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#6C63FF',
            headerShown: false,
            tabBarStyle: { backgroundColor: '#212121', borderTopWidth: 0 },
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
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
