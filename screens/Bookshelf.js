import React from 'react';
import { Box, Text } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import BookLists from '../components/bookComponents/BookLists';

export default function Bookshelf({ navigation }) {
  return (
    <Box flex={1} bg='#000' py={4}>
      <StatusBar style='light' />
      <BookLists navigation={navigation} />
    </Box>
  );
}
