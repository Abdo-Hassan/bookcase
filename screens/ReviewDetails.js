import React, { useState } from 'react';
import { Collapse, Heading, Box, HStack, VStack, Badge } from 'native-base';
import ReviewsList from '../components/ReviewsList';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { secondaryColor } from '../constants/Colors';

export default function ReviewDetails({ navigation }) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box flex={1} bg='#000'>
      <StatusBar style='auto' />

      <HStack m={4}>
        <Badge
          rounded='md'
          py={2.5}
          px={2}
          mr={3}
          zIndex={1}
          variant='solid'
          alignSelf='flex-end'
          _text={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
          }}
          bgColor={secondaryColor}
          right='0'
        >
          4.69
        </Badge>

        <VStack space={2}>
          <Heading fontSize='16' color='#fff'>
            Overall rating
          </Heading>
          <Heading fontSize='14' color='#ccc'>
            Based in 1269 ratings
          </Heading>
        </VStack>

        <Collapse isOpen={show}>
          Candy canes macaroon croissant carrot cake soufflé toffee topping
          pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
          biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly
          sweet roll I love. Pastry pastry powder pie lemon drops chocolate
          topping dessert.
        </Collapse>

        {show ? (
          <Feather
            name='chevron-down'
            size={24}
            color='#ccc'
            onPress={handleToggle}
          />
        ) : (
          <Feather
            name='chevron-up'
            size={24}
            color='#ccc'
            onPress={handleToggle}
          />
        )}
      </HStack>

      <ReviewsList allReviews={true} navigation={navigation} />
    </Box>
  );
}
