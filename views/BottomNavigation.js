import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Bookshelf from '../screens/Bookshelf';
import Home from '../screens/books/Home';
import Profile from '../screens/profile/Profile';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
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
        name='homeScreen'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='book' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='search'
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='search1' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='bookshelf'
        component={Bookshelf}
        options={{
          tabBarLabel: 'Bookshelf',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='favorite-border' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
