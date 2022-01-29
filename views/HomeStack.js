import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from '../screens/books/BookDetails';
import BookListDetails from '../screens/books/BookListDetails';
import BooksOverview from '../screens/books/BooksOverview';
import { customColor, secondaryColor } from '../constants/Colors';
import Notifications from '../screens/Notifications';
import CommentSection from '../screens/reviews/CommentSection';
import ReviewDetails from '../screens/reviews/ReviewDetails';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
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
        name='reviews'
        options={{
          headerTintColor: '#fff',
          title: 'Reviews',
          headerShown: true,
          headerStyle: {
            backgroundColor: secondaryColor,
          },
        }}
        component={ReviewDetails}
      />
      <Stack.Screen
        name='comment'
        options={{
          headerTintColor: '#fff',
          title: 'Comments',
          headerShown: true,
          headerStyle: {
            backgroundColor: secondaryColor,
          },
        }}
        component={CommentSection}
      />
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
