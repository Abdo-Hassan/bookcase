import React from 'react';
import { Button, Heading } from 'native-base';
import { TouchableOpacity } from 'react-native';

export default function AuthButton({ title, color }) {
  return (
    <TouchableOpacity activeOpacity='0.9'>
      <Button
        size='lg'
        borderRadius='full'
        style={{ backgroundColor: color }}
        width={320}
        p='4'
        mb='6'
      >
        <Heading size='sm' color={title === 'Log in' ? 'dark.100' : 'white'}>
          {title}
        </Heading>
      </Button>
    </TouchableOpacity>
  );
}
