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
  Heading,
  Badge,
  AspectRatio,
  Stack,
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
      pb={4}
    >
      <HStack mt='20' mb='5' alignItems='center'>
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
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookListCover.jpg')}
                alt='image'
                rounded='lg'
                height={130}
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
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookListCover2.jpg')}
                alt='image'
                rounded='lg'
                height={130}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookListCover1.jpg')}
                alt='image'
                rounded='lg'
                height={130}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>

          {/* book of the month */}
          <Box ml='5' mt='5'>
            <Heading fontSize='20' color='#fff' textAlign='left' mb='1'>
              كتاب الشهر
            </Heading>
            <Heading fontSize='13' color='#ccc' textAlign='left' mb='1'>
              الدحيح ما وراء الكواليس
            </Heading>
          </Box>

          <TouchableOpacity activeOpacity={0.6}>
            <Box
              bg={{
                linearGradient: {
                  colors: ['#222', '#888'],
                  start: [1, 1],
                  end: [1, 0],
                },
              }}
              mx={4}
              my={4}
              rounded='lg'
            >
              <Badge
                rounded='sm'
                px={3}
                py={2}
                zIndex={1}
                variant='solid'
                alignSelf='flex-end'
                _text={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
                bgColor='#FF5403'
                right='0'
              >
                4.7
              </Badge>
              <Box rounded='lg'>
                <Image
                  source={require('../../assets/elda7e7.png')}
                  alt='book image'
                  size={'200'}
                  rounded='lg'
                  alignSelf='center'
                  resizeMode='cover'
                />
                <Stack p='4' textAlign='center' space={3}>
                  <Stack space={2}>
                    <Heading size='md' ml='-1' color='#fff' textAlign='center'>
                      الدحيح - ما وراء الكواليس
                    </Heading>
                    <Text
                      fontSize='xs'
                      _light={{
                        color: 'white',
                      }}
                      _dark={{
                        color: 'white',
                      }}
                      fontWeight='500'
                      ml='-0.5'
                      mt='-1'
                      textAlign='center'
                    >
                      By: طاهر المعتز بالله
                    </Text>
                  </Stack>

                  <Text fontWeight='400' color='#fff' textAlign='center' mx='5'>
                    الدحيح : ما وراء الكواليس "كتاب بالعامية المصرية بصوت الدحيح
                    نفسه ومن كتاية طاهر المعتز بالله , أحد كتاب اهم واشهر حلقات
                    الدحيح. أستمع الان"
                  </Text>
                </Stack>
              </Box>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookListCover2.jpg')}
                alt='image'
                rounded='lg'
                height={130}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>
        </ScrollView>
      </VStack>
    </Box>
  );
}
