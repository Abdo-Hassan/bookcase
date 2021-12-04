import { Center, Heading, HStack, Spinner } from 'native-base';
import React from 'react';

export default function Loading() {
  return (
    <Center flex={1} px='3'>
      <HStack space={2} alignItems='center'>
        <Spinner accessibilityLabel='Loading posts' />
        <Heading color='primary.500' fontSize='md'>
          Loading
        </Heading>
      </HStack>
    </Center>
  );
}
