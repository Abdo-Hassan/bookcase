import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { customColor } from '../../constants/Colors';
import Welcome from './Welcome';
import Register from './Register';
import Login from './Login';

const Stack = createStackNavigator();

export default function Guest() {
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
