import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from './BookDetails';
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
      <Stack.Screen name='booksOverview' component={BooksOverview} />
      <Stack.Screen name='bookDetails' component={BookDetails} />
      <Stack.Screen name='bookListDetails' component={BookListDetails} />
    </Stack.Navigator>
  );
}
