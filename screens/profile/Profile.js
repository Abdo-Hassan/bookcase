import React from 'react';
import { Box, Text } from 'native-base';
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
  return (
    <Box flex={1} bg='#000' p={3}>
      <StatusBar style='light' />
    </Box>
  );
}
