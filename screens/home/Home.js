import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Box,
  Image,
  Text,
  Center,
  VStack,
  HStack,
  ScrollView,
} from 'native-base';
import { TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default function Home() {
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: ['#6C63FF', '#000'],
          start: [0, 0],
          end: [0, 0.2],
        },
      }}
    >
      <HStack mt='20' mb='10' alignItems='center'>
        <Text bold fontSize='28' ml='3' color='#fff' flex={0.92}>
          Good afternoon!
        </Text>
        <TouchableOpacity>
          <Ionicons name='notifications-outline' size={25} color='#fff' />
        </TouchableOpacity>
      </HStack>

      {/* list of books */}
      <VStack>
        <ScrollView>
          <TouchableOpacity activeOpacity={0.6}>
            <Box mx='4' my='2'>
              <Image
                source={require('../../assets/bookListCover.jpg')}
                alt='image'
                rounded='lg'
                height={150}
                resizeMode='cover'
              />
              <Center
                _text={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 'xl',
                }}
                position='absolute'
                bottom='6'
                left='3'
              >
                أبدأ بهذه الكتب
              </Center>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Box mx='4' my='2'>
              <Image
                source={require('../../assets/bookListCover2.jpg')}
                alt='image'
                rounded='lg'
                height={150}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Box mx='4' my='2'>
              <Image
                source={require('../../assets/bookListCover1.jpg')}
                alt='image'
                rounded='lg'
                height={150}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>
        </ScrollView>
      </VStack>
    </Box>
  );
}
