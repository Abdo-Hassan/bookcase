import React from 'react';
import { Box, Text } from 'native-base';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
  let userInfo = useSelector((state) => state.userInfo);
  return (
    <Box flex={1} bg='#000' p={3}>
      <StatusBar style='light' />
      <Text>{userInfo?.email}</Text>
    </Box>
  );
}
