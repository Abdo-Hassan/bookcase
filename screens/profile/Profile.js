import React from 'react';
import {
  Box,
  Text,
  VStack,
  Heading,
  Avatar,
  Button,
  HStack,
  Progress,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  customColor,
  customPrimaryColor,
  customSecondaryColor,
  primaryColor,
} from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function Profile({ navigation }) {
  const userInfo = useSelector((state) => state.userInfo);
  console.log('Profile - userInfo', userInfo);
  return (
    <Box flex={1} bg='#000' px={4}>
      <StatusBar style='light' />

      <VStack mt={20} pt={20} pb={8} bg={customPrimaryColor} rounded='xl'>
        <Box
          bg={customPrimaryColor}
          p={3}
          position='absolute'
          alignSelf='center'
          top={-50}
          rounded='full'
        >
          <Avatar
            size='xl'
            source={require('../../assets/elda7e7.png')}
            alignSelf='center'
          />
        </Box>

        <VStack space={3} alignItems='center' justifyContent='center'>
          <Heading fontSize='19' color='#fff'>
            Hi, name!
          </Heading>
          <Text fontSize='13' color='#fff'>
            2
          </Text>
          <Text fontSize='15' color='#ccc' mt={-3} mb={4}>
            Following
          </Text>
        </VStack>

        <Button
          bgColor={customSecondaryColor}
          w='40%'
          alignSelf='center'
          rounded='full'
          px={3}
          py={3}
          _text={{
            color: customColor,
            fontSize: '16',
            fontWeight: 'bold',
          }}
          position='absolute'
          bottom={-20}
        >
          Edit Profile
        </Button>
      </VStack>

      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => navigation.navigate('bookshelf')}
      >
        <HStack
          bgColor='#1A1A1A'
          py={4}
          rounded='lg'
          mt={10}
          alignItems='center'
          justifyContent='space-around'
        >
          <MaterialCommunityIcons
            name='bookshelf'
            size={50}
            color={primaryColor}
          />
          <Text fontSize='20' color='#fff' mr={20}>
            Favorite Books
          </Text>
        </HStack>
      </TouchableOpacity>

      {/* <Progress colorScheme='warning' value={65} /> */}
    </Box>
  );
}
