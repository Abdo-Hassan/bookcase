import React from 'react';
import { Heading, HStack, Box, Avatar, FlatList, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ReviewsList from '../reviewsComponents/ReviewsList';

export default function Reviews({ navigation }) {
  return (
    <Box mx={3}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('reviews')}
      >
        <HStack mx={4} my={4}>
          <Heading fontSize='18' flex={1} textAlign='left' color='#fff'>
            Reviews
          </Heading>
          <Heading fontSize='17' color='#6d6c6c'>
            <Ionicons name='chevron-forward' size={24} color='#fff' />
          </Heading>
        </HStack>
      </TouchableOpacity>

      <ReviewsList allReviews={false} navigation={navigation} />
    </Box>
  );
}
