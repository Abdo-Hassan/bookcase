import React from 'react';
import { Box } from 'native-base';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

export default function Loading() {
  return (
    <Box flex={1} bg='#000'>
      <StatusBar style='light' />
      <LottieView source={require('../assets/loading.json')} autoPlay loop />
    </Box>
  );
}
