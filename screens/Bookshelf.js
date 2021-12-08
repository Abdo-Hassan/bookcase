import React from 'react';
import { Box, Text } from 'native-base';
import { StatusBar } from 'expo-status-bar';

export default function Bookshelf() {
  return (
    <Box flex={1} bg='#000'>
      <StatusBar style='light' />
      <Text>Bookshelf</Text>
    </Box>
  );
}
