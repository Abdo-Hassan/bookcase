import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from './BookDetails';
import BookListDetails from './BookListDetails';
import BooksOverview from './BooksOverview';
import { customColor } from '../../constants/Colors';
import Notifications from '../Notifications';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='booksOverview' component={BooksOverview} />
      <Stack.Screen name='bookDetails' component={BookDetails} />
      <Stack.Screen name='bookListDetails' component={BookListDetails} />
      <Stack.Screen
        name='notifications'
        options={{
          headerTintColor: '#fff',
          title: 'Notifications',
          headerShown: true,
          headerStyle: {
            backgroundColor: customColor,
          },
        }}
        component={Notifications}
      />
    </Stack.Navigator>
  );
}
