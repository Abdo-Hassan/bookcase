import React from 'react';
import { Button, Heading, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function ActionButton({
  title,
  color,
  author,
  review,
  onClick,
  auth,
  signInLoading,
  signUpLoading,
  editNameLoading,
}) {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <Button
        onPress={onClick}
        isLoading={
          (auth && signInLoading) ||
          (auth && signUpLoading) ||
          (auth && editNameLoading)
            ? true
            : false
        }
        disabled={
          (auth && signInLoading) ||
          (auth && signUpLoading) ||
          (auth && editNameLoading)
            ? true
            : false
        }
        position={review ? 'absolute' : 'relative'}
        bottom={review ? 2 : 0}
        alignSelf='center'
        bg={color}
        borderRadius='full'
        width={author ? 115 : 320}
        p={author ? 3 : 4}
        mb={author || !auth ? 1 : 6}
        leftIcon={
          author && !auth ? (
            <Icon as={FontAwesome5} name='book-reader' size='sm' color='#fff' />
          ) : !author && !auth ? (
            <Ionicons name='play' size={24} color='#fff' />
          ) : null
        }>
        <Heading
          size='sm'
          color={title === 'Log in' ? 'dark.100' : 'white'}
          textAlign='center'>
          {title}
        </Heading>
      </Button>
    </TouchableOpacity>
  );
}
