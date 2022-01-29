import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

export default function BooksOverview({ navigation }) {
  const userProfile = useSelector((state) => state.userData.userProfile);
  const [featuredBook, setFeaturedBook] = useState({});

  const fetchFeaturedBook = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/XFkyuQEACAAJ`
      );
      const featuredBook = res?.data;
      setFeaturedBook(featuredBook);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeaturedBook();
  }, []);

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
      pb={4}>
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
                author: false,
                term: 'health',
                category: false,
                num: '4',
                title: 'الصحة والجمال',
              })
            }>
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookCover4.jpg')}
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
                left='3'>
                الصحة والجمال
              </Center>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                author: false,
                term: 'nature',
                category: false,
                num: '6',
                title: 'الطبيعة',
              })
            }>
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
                left='3'>
                الطبيعة
              </Center>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                author: false,
                term: 'technology',
                category: false,
                num: '3',
                title: 'التكنولوجيا',
              })
            }>
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookCover3.jpg')}
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
                left='3'>
                التكنولوجيا
              </Center>
            </Box>
          </TouchableOpacity>

          <BookList
            navigation={navigation}
            term='planets'
            title='الفلك والكواكب'
          />

          {/* book of the month */}
          <Box ml='5' mt='5'>
            <Heading fontSize='20' color='#fff' textAlign='left' mb='1'>
              كتاب الشهر
            </Heading>
            <Heading fontSize='13' color='#ccc' textAlign='left' mb='1'>
              {featuredBook?.volumeInfo?.title}
            </Heading>
          </Box>

          {/* Featured Books */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookDetails', {
                item: featuredBook,
              })
            }>
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
              rounded='lg'>
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
                right='0'>
                4.5
              </Badge>
              <Box rounded='lg'>
                <Image
                  source={require('../../assets/The-Last-Astronaut.jpg')}
                  alt='book image'
                  size={'230'}
                  rounded='lg'
                  mt={2}
                  alignSelf='center'
                  resizeMode='cover'
                />
                <Stack p='4' textAlign='center' space={3}>
                  <Stack space={2}>
                    <Heading size='md' ml='-1' color='#fff' textAlign='center'>
                      {featuredBook?.volumeInfo?.title}
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
                      textAlign='center'>
                      By:
                      {featuredBook?.volumeInfo?.authors[0]}
                    </Text>
                  </Stack>

                  <Text fontWeight='400' color='#fff' textAlign='center' mx='5'>
                    {featuredBook?.volumeInfo?.description.length > 199
                      ? `${featuredBook?.volumeInfo?.description.slice(
                          0,
                          199
                        )}.....`
                      : featuredBook?.volumeInfo?.description}
                  </Text>
                </Stack>
              </Box>
            </Box>
          </TouchableOpacity>

          <BookList
            term='sport'
            navigation={navigation}
            title='الجديد فى الرياضة'
          />
          <BookList
            navigation={navigation}
            term='brain'
            title='القوة العقلية'
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                author: false,
                term: 'science',
                category: false,
                num: '5',
                title: 'العلوم',
              })
            }>
            <Box mx='4' my='1'>
              <Image
                source={require('../../assets/bookCover5.jpg')}
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
                left='3'>
                العلوم
              </Center>
            </Box>
          </TouchableOpacity>
        </ScrollView>
      </VStack>
    </Box>
  );
}
