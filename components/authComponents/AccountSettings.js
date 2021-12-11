import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Heading, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';

export default function AccountSettings() {
  const userAuth = useSelector((state) => state.auth.userAuth);
  const userProfile = useSelector((state) => state.userData.userProfile);

  return (
    <VStack flex={1} bg='#000' px={5} py={3} space={3}>
      <StatusBar style='light' />
      <Heading fontSize='17' color='#fff'>
        Basic Info
      </Heading>

      <Text color='#ccc' fontSize='15'>
        Logged in as
      </Text>
      <Text color='#fff' fontSize='16'>
        {userAuth?.email}
      </Text>

      <Text color='#ccc' fontSize='15'>
        Full name
      </Text>
      <Text color='#fff' fontSize='16'>
        {userProfile?.firstName} {userProfile?.lastName}
      </Text>
    </VStack>
  );
}
