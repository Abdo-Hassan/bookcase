import React from 'react';
import { Box, Image } from 'native-base';

export default function BookDetails({ route, navigation }) {
  const { bookImage } = route.params;
  return (
    <Box>
      <Image source={bookImage} size='xl' alt='bookImage' />
    </Box>
  );
}
