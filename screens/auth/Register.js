import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Box, Heading, Icon, Input, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import ActionButton from '../../components/ActionButton';
import { secondaryColor } from '../../constants/Colors';
import { register } from '../../firebase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const createUser = () => {
    if (email && password) {
      const { user } = register(email, password);
      if (user) {
        navigation.navigate('home');
      }
    }
  };

  return (
    <>
      <StatusBar style='light' />
      <Box flex={1} bgColor='#000' pt={3}>
        <VStack space={2} m={4}>
          <Heading fontSize='16' color='#fff' fontWeight='normal'>
            Create an account and start your subscription to get unlimited
            access to this book and thousands more
          </Heading>

          <VStack my={4} space={3}>
            <Input
              borderWidth={0}
              fontSize={15}
              variant='filled'
              placeholder='E-mail'
              py={3}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              fontSize={15}
              py={3}
              borderWidth={0}
              value={password}
              onChangeText={setPassword}
              variant='filled'
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Icon
                  onPress={handleClick}
                  as={<MaterialIcons name='visibility-off' />}
                  size={5}
                  mr='2'
                  color='muted.400'
                />
              }
              placeholder='Password'
            />
          </VStack>

          <ActionButton
            title='Continue'
            color={secondaryColor}
            onClick={() => console.log('register')}
            auth={true}
            author={false}
            onClick={createUser}
          />
        </VStack>
      </Box>
    </>
  );
}
