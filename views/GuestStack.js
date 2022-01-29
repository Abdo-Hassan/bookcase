import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customColor } from '../constants/Colors';
import Welcome from '../screens/auth/Welcome';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

export default function GuestStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='welcome' component={Welcome} />
      <Stack.Screen
        name='register'
        component={Register}
        options={{
          headerTintColor: '#fff',
          title: 'Create account',
          headerShown: true,
          headerStyle: {
            backgroundColor: customColor,
          },
        }}
      />
      <Stack.Screen
        name='login'
        component={Login}
        options={{
          headerTintColor: '#fff',
          title: 'Login',
          headerShown: true,
          headerStyle: {
            backgroundColor: customColor,
          },
        }}
      />
    </Stack.Navigator>
  );
}
