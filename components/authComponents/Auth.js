import React, { useState } from 'react';
import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from 'native-base';
import ActionButton from '../ActionButton';
import { secondaryColor } from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import {
  createUserAction,
  createUserWithFacebook,
  createUserWithGoogle,
  signIn,
} from '../../redux/actions/authActions';

export default function Auth({ register }) {
  const [show, setShow] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

  const loginUser = () => {
    if (email && password) {
      setSignInLoading(true);
      dispatch(signIn(email, password));
    } else {
      setSignInLoading(false);
    }
  };

  const createUser = () => {
    if ((email && password && firstName, lastName)) {
      setSignUpLoading(true);
      dispatch(createUserAction(email, password, firstName, lastName));
    } else {
      setSignUpLoading(false);
    }
  };

  const signUpWithGoogle = () => {
    dispatch(createUserWithGoogle());
  };

  const signUpWithFacebook = () => {
    dispatch(createUserWithFacebook());
  };

  return (
    <Box flex={1} bgColor='#000' pt={register ? 3 : 0}>
      <VStack space={2} m={4}>
        {register && (
          <Heading fontSize='16' color='#fff' fontWeight='normal'>
            Create an account and start your subscription to get unlimited
            access to this book and thousands more
          </Heading>
        )}

        <VStack my={4} space={3}>
          {register && (
            <>
              <Input
                borderWidth={0}
                fontSize={15}
                variant='filled'
                placeholder='First Name'
                py={3}
                mb={3}
                value={firstName}
                onChangeText={setFirstName}
                isInvalid={false}
              />
              <Input
                borderWidth={0}
                fontSize={15}
                variant='filled'
                placeholder='Last Name'
                py={3}
                value={lastName}
                onChangeText={setLastName}
                isInvalid={false}
              />
            </>
          )}
          <Input
            borderWidth={0}
            fontSize={15}
            variant='filled'
            placeholder='E-mail'
            py={3}
            value={email}
            onChangeText={setEmail}
            isInvalid={false}
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
                as={
                  show ? (
                    <MaterialIcons name='visibility' />
                  ) : (
                    <MaterialIcons name='visibility-off' />
                  )
                }
                size={5}
                mr='2'
                color='muted.400'
              />
            }
            placeholder='Password'
          />
        </VStack>

        <ActionButton
          title={register ? 'Continue' : 'Login'}
          color={secondaryColor}
          auth={true}
          author={false}
          signInLoading={signInLoading}
          signUpLoading={signUpLoading}
          onClick={register ? createUser : loginUser}
        />

        {!register && (
          <Text
            fontSize={16}
            color={secondaryColor}
            fontWeight='bold'
            textAlign='center'
            mb={2}
          >
            Forgot password?
          </Text>
        )}

        <HStack alignItems='center' justifyContent='center' space={3} mb={3}>
          <Divider w={10} />
          <Text fontSize='14'>OR</Text>
          <Divider w={10} />
        </HStack>

        <ActionButton
          title='Sign up with google'
          color={secondaryColor}
          auth={true}
          author={false}
          onClick={signUpWithGoogle}
        />

        <ActionButton
          title='Sign up with Facebook'
          color={secondaryColor}
          auth={true}
          author={false}
          onClick={signUpWithFacebook}
        />
      </VStack>
    </Box>
  );
}
