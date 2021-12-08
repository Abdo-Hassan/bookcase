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
  Stack,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import BookList from '../../components/BookList';
import { primaryColor } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

let DummyBooks1 = [
  { id: 1, image: require('../../assets/elda7e7.png') },
  { id: 3, image: require('../../assets/bookCover4.jpg') },
  { id: 4, image: require('../../assets/bookCover5.jpg') },
  { id: 5, image: require('../../assets/bookCover6.jpg') },
  { id: 6, image: require('../../assets/bookCover7.jpg') },
  { id: 2, image: require('../../assets/bookCover.jpg') },
  { id: 7, image: require('../../assets/bookCover8.jpg') },
  { id: 8, image: require('../../assets/bookCover9.jpg') },
];

let DummyBooks2 = [
  { id: 11, image: require('../../assets/bookCover9.jpg') },
  { id: 12, image: require('../../assets/bookCover8.jpg') },
  { id: 13, image: require('../../assets/bookCover4.jpg') },
  { id: 9, image: require('../../assets/elda7e7.png') },
  { id: 14, image: require('../../assets/bookCover5.jpg') },
  { id: 10, image: require('../../assets/bookCover.jpg') },
  { id: 15, image: require('../../assets/bookCover8.jpg') },
  { id: 16, image: require('../../assets/bookCover9.jpg') },
];

let DummyBooks3 = [
  { id: 18, image: require('../../assets/bookCover.jpg') },
  { id: 19, image: require('../../assets/bookCover6.jpg') },
  { id: 20, image: require('../../assets/bookCover7.jpg') },
  { id: 21, image: require('../../assets/bookCover9.jpg') },
  { id: 22, image: require('../../assets/bookCover4.jpg') },
  { id: 23, image: require('../../assets/bookCover6.jpg') },
  { id: 17, image: require('../../assets/elda7e7.png') },
  { id: 24, image: require('../../assets/bookCover4.jpg') },
];

export default function BooksOverview({ navigation }) {
  const userProfile = useSelector((state) => state.userProfile);
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: [primaryColor, '#000'],
          start: [0, 0],
          end: [0, 0.2],
        },
      }}
      pb={4}
    >
      <StatusBar style='light' />
      <HStack mt='20' mb='5' alignItems='center'>
        <Text bold fontSize='26' ml='3' color='#fff' flex={0.92}>
          Good Morning {userProfile?.firstName}
        </Text>
        <TouchableOpacity>
          <Ionicons
            name='notifications-outline'
            size={25}
            color='#fff'
            onPress={() => navigation.navigate('notifications')}
          />
        </TouchableOpacity>
      </HStack>

      {/* list of books */}
      <VStack h='xl'>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                books: DummyBooks1,
                image1: DummyBooks1[0].image,
                image2: DummyBooks1[1].image,
                image3: DummyBooks1[2].image,
              })
            }
          >
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookCover6.jpg')}
                alt='image'
                rounded='lg'
                height={120}
                mb={1}
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

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                books: DummyBooks2,
                image1: DummyBooks2[0].image,
                image2: DummyBooks2[1].image,
                image3: DummyBooks2[2].image,
              })
            }
          >
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookCover4.jpg')}
                alt='image'
                rounded='lg'
                height={120}
                mb={1}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                books: DummyBooks3,
                image1: DummyBooks3[0].image,
                image2: DummyBooks3[1].image,
                image3: DummyBooks3[2].image,
              })
            }
          >
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookCover5.jpg')}
                alt='image'
                rounded='lg'
                height={120}
                mb={1}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>

          <BookList
            navigation={navigation}
            DummyBooks={DummyBooks3}
            title=' الأكثر استماعا اليوم'
          />

          {/* book of the month */}
          <Box ml='5' mt='5'>
            <Heading fontSize='20' color='#fff' textAlign='left' mb='1'>
              كتاب الشهر
            </Heading>
            <Heading fontSize='13' color='#ccc' textAlign='left' mb='1'>
              الدحيح ما وراء الكواليس
            </Heading>
          </Box>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookDetails', {
                books: DummyBooks1,
                bookImage: require('../../assets/elda7e7.png'),
              })
            }
          >
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
                  color: '#fff',
                }}
                bgColor={primaryColor}
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

          <BookList
            navigation={navigation}
            DummyBooks={DummyBooks1}
            title='جديد الاسبوع'
          />
          <BookList
            navigation={navigation}
            DummyBooks={DummyBooks2}
            title='قريبا على بوكيس'
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                books: DummyBooks1,
                image1: DummyBooks1[0].image,
                image2: DummyBooks1[1].image,
                image3: DummyBooks1[2].image,
              })
            }
          >
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookCover7.jpg')}
                alt='image'
                rounded='lg'
                height={120}
                mb={1}
                resizeMode='cover'
              />
            </Box>
          </TouchableOpacity>
        </ScrollView>
      </VStack>
    </Box>
  );
}
