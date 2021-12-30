import React, { useState } from 'react';
import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Box, HStack, VStack, Avatar, Heading, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { secondaryColor } from '../../constants/Colors';

export default function UserReview({
  review,
  allReviews,
  navigation,
  addComment,
  actionButtons,
}) {
  const [favorite, setFavorite] = useState(false);
  const handleNavigate = () => {
    if (!allReviews && !addComment) {
      navigation.navigate('reviews');
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={!allReviews && !addComment ? 0.4 : 1}
      onPress={() => handleNavigate()}
    >
      <Box
        px={4}
        py={3}
        mx={2}
        my={allReviews ? 1 : 0}
        bgColor='#222'
        rounded='md'
      >
        <HStack space={3}>
          <Avatar bg='#ccc' size='md'>
            <Ionicons name='person' size={30} color='#888' />
          </Avatar>

          <VStack space={2}>
            <Heading fontSize='16'>{review.commenter}</Heading>
            <HStack
              space={1}
              mr={3}
              alignItems='center'
              justifyContent='center'
            >
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <Heading fontSize='12' color='#ccc' ml={2}>
                {review.date}
              </Heading>
            </HStack>
          </VStack>

          {allReviews && (
            <TouchableOpacity activeOpacity={0.4}>
              <Box ml={10}>
                <Feather name='flag' size={26} color='#fa8484' />
              </Box>
            </TouchableOpacity>
          )}
        </HStack>

        <Text
          lineHeight='xl'
          fontSize='15'
          fontWeight='bold'
          color='#fff'
          w={allReviews || addComment ? 'auto' : 240}
          my={4}
        >
          {review.comment}
        </Text>

        {actionButtons && (
          <HStack space={6} mt={2}>
            <HStack space={2} alignItems='center' justifyContent='center'>
              <MaterialIcons
                name={favorite ? 'favorite' : 'favorite-border'}
                color={favorite ? secondaryColor : '#ccc'}
                size={18}
                onPress={() => setFavorite(!favorite)}
              />
              <Heading fontSize='14' color='#ccc'>
                210 Likes
              </Heading>
            </HStack>

            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() =>
                navigation.navigate('comment', {
                  review,
                  navigation,
                })
              }
            >
              <HStack space={3} alignItems='center' justifyContent='center'>
                {!addComment && (
                  <>
                    <EvilIcons name='comment' size={26} color='#ccc' />
                    <Heading fontSize='14' color='#ccc'>
                      18 Comment
                    </Heading>
                  </>
                )}
              </HStack>
            </TouchableOpacity>
          </HStack>
        )}
      </Box>
    </TouchableOpacity>
  );
}
