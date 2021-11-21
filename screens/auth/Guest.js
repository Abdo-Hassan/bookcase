import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import Register from './Register';

const Stack = createStackNavigator();

export default function Guest() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
}
