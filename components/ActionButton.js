import React from 'react';
import { Button, Heading, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { secondaryColor } from '../constants/Colors';

export default function ActionButton({
  title,
  color,
  author,
  review,
  onClick,
  auth,
}) {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <Button
        onPress={onClick}
        position={review ? 'absolute' : 'relative'}
        bottom={review ? 2 : 0}
        alignSelf='center'
        bg={color}
        borderRadius='full'
        width={author ? 180 : 320}
        p={author ? 3 : 4}
        mb={author || !auth ? 1 : 6}
        leftIcon={
          author && !auth ? (
            <Icon as={Entypo} name='plus' size='sm' color='#fff' />
          ) : !author && !auth ? (
            <Ionicons name='play' size={24} color='#fff' />
          ) : null
        }
      >
        <Heading
          size='sm'
          color={title === 'Log in' ? 'dark.100' : 'white'}
          textAlign='center'
        >
          {title}
        </Heading>
      </Button>
    </TouchableOpacity>
  );
}
