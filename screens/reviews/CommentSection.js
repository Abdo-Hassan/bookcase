import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  HStack,
  VStack,
  Heading,
  IconButton,
} from 'native-base';
import { TextInput } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import UserReview from '../../components/UserReview';
import { secondaryColor } from '../../constants/Colors';

export default function CommentSection({ route, navigation }) {
  const { review } = route.params;
  const [comment, setComment] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [newComment, setNewComment] = useState(false);

  const handleComment = (text) => {
    setComment(text);
  };

  return (
    <Box flex={1} bg='#000' py={2}>
      <Box flex={1}>
        {/* UserReview */}
        <UserReview
          review={review}
          navigation={navigation}
          allReviews={false}
          addComment={true}
          actionButtons={true}
        />

        {/* comment section */}
        {newComment && (
          <VStack bg='#111' mx={2} rounded='md' p={4} space={2}>
            <HStack space={2}>
              <Heading fontSize='17' color='#fff' flex={1}>
                You
              </Heading>

              <IconButton
                size={7}
                variant='ghost'
                _icon={{
                  as: Feather,
                  name: 'edit-2',
                  color: 'trueGray.400',
                  size: '7',
                }}
                _pressed={{
                  backgroundColor: '#666',
                  borderRadius: 50,
                }}
              />
              <IconButton
                size={7}
                variant='ghost'
                _icon={{
                  as: MaterialIcons,
                  name: 'delete-outline',
                  color: 'trueGray.400',
                  size: '7',
                }}
                _pressed={{
                  backgroundColor: '#666',
                  borderRadius: 50,
                }}
              />
            </HStack>

            <HStack>
              <Heading fontSize='12' color='#ccc' flex={1} mt={-1}>
                In 0 minutes
              </Heading>
            </HStack>

            <HStack>
              <Heading
                fontSize='15'
                color='#fff'
                flex={1}
                textAlign='right'
                my={3}
              >
                {comment}
              </Heading>
            </HStack>

            <HStack space={1}>
              <MaterialIcons
                name={favorite ? 'favorite' : 'favorite-border'}
                color={favorite ? secondaryColor : '#ccc'}
                size={20}
                onPress={() => setFavorite(!favorite)}
              />
              <Heading fontSize='15' color='#ccc'>
                1 Likes
              </Heading>
            </HStack>
          </VStack>
        )}
      </Box>

      {/* write comment */}
      <HStack space={2} mx={2}>
        <TextInput
          placeholder='Write a comment...'
          value={comment}
          placeholderTextColor='#ddd'
          onChangeText={handleComment}
          style={{
            color: '#fff',
            flex: 1,
            backgroundColor: '#111',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        />
        <Button
          size='md'
          variant='unstyled'
          onPress={() => setNewComment(true)}
          color='#ccc'
          _text={{
            color: secondaryColor,
            fontWeight: 'bold',
          }}
        >
          Post
        </Button>
      </HStack>
    </Box>
  );
}
