import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookListDetails from './BookListDetails';
import BooksOverview from './BooksOverview';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='BooksOverview' component={BooksOverview} />
      <Stack.Screen name='BookListDetails' component={BookListDetails} />
    </Stack.Navigator>
  );
}
