import React from 'react';
import { Button, Heading, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ActionButton({ title, color, author }) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <Button
        borderRadius='full'
        bgColor={color}
        width={author ? 180 : 320}
        p={author ? 3 : 4}
        mb={author ? 1 : 6}
        leftIcon={<Icon as={Entypo} name='plus' size='sm' />}
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
