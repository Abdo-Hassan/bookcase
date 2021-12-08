import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Heading, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';

export default function AccountSettings() {
  const userInfo = useSelector((state) => state.userInfo);
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
        {userInfo?.email}
      </Text>

      <Text color='#ccc' fontSize='15'>
        Full name
      </Text>
      <Text color='#fff' fontSize='16'>
        {userInfo?.firstName} {userInfo?.lastName}
      </Text>
    </VStack>
  );
}
