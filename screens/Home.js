import React from 'react';
import { Box, HStack, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: ['#6C63FF', '#000'],
          start: [0, 0],
          end: [0, 0.2],
        },
      }}
    >
      <HStack my='20' alignItems='center'>
        <Text bold fontSize='28' ml='3' color='#fff' flex={0.92}>
          Good afternoon!
        </Text>
        <TouchableOpacity>
          <Ionicons name='notifications-outline' size={25} color='#fff' />
        </TouchableOpacity>
      </HStack>
    </Box>
  );
}
