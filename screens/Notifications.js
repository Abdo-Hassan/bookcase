import React from 'react';
import { Box, Center, Heading } from 'native-base';

export default function Notifications() {
  return (
    <Box flex={1} bg='#000'>
      <Center flex={1} px={4}>
        <Heading fontSize='15' mb={1} fontWeight='normal'>
          We have no updates.
        </Heading>
        <Heading fontSize='15' fontWeight='normal'>
          Please Check again later.
        </Heading>
      </Center>
    </Box>
  );
}
