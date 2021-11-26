import React from 'react';
import { Button, Heading, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { secondaryColor } from '../constants/Colors';

export default function ActionButton({ title, color, author }) {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <Button
        alignSelf='center'
        bg={color}
        borderRadius='full'
        width={author ? 180 : 320}
        p={author ? 3 : 4}
        mb={author ? 1 : 6}
        leftIcon={
          author ? (
            <Icon as={Entypo} name='plus' size='sm' />
          ) : (
            <Ionicons name='play' size={24} color='#fff' />
          )
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
