import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Bookshelf from '../screens/Bookshelf';
import Home from '../screens/books/Home';
import Profile from '../screens/profile/Profile';
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  EvilIcons,
} from '@expo/vector-icons';
import { customColor, primaryColor } from '../constants/Colors';
import ActionSheetDetails from '../components/ActionSheetDetails';
import { useDisclose } from 'native-base';

const Tab = createBottomTabNavigator();

export default function BottomNavigation({ navigation }) {
  const { isOpen, onClose, onOpen } = useDisclose();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
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
          title: 'Profile',
          headerShown: true,
          headerStyle: {
            backgroundColor: customColor,
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerRight: () => {
            return (
              <>
                <EvilIcons
                  name='gear'
                  size={30}
                  color='#ccc'
                  style={{ marginRight: 15 }}
                  onPress={onOpen}
                />
                <ActionSheetDetails
                  isOpen={isOpen}
                  onClose={onClose}
                  profile={true}
                  navigation={navigation}
                />
              </>
            );
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name='person-outline' size={size} color={color} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
