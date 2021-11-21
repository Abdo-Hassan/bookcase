import React from 'react';
import { Button, Center } from 'native-base';

export default function Home({ navigation }) {
  return (
    <Center flex={1} px={3}>
      <Button onPress={() => navigation.navigate('Search')}>
        Go to Search
      </Button>
    </Center>
  );
}
