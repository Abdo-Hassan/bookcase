import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Bookshelf from '../screens/Bookshelf';
import HomeStack from '../views/HomeStack';
import ProfileStack from './ProfileStack';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { customColor, primaryColor } from '../constants/Colors';

const Tab = createBottomTabNavigator();

export default function BottomNavigation({}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
          borderTopWidth: 0,
          height: 55,
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name='homeStack'
        component={HomeStack}
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
          title: 'Book shelf',
          headerStyle: {
            backgroundColor: customColor,
          },
          headerShown: true,
          headerTintColor: '#fff',
          tabBarLabel: 'Bookshelf',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='favorite-border' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='profileStack'
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
