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
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import BookList from '../../components/BookList';
import { primaryColor } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

export default function BooksOverview({ navigation }) {
  const userProfile = useSelector((state) => state.userData.userProfile);
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
                term: 'health',
                title: 'الصحة والجمال',
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
                الصحة والجمال
              </Center>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                term: 'nature',
                title: 'الطبيعة',
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
                الطبيعة
              </Center>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('bookListDetails', {
                term: 'technology',
                title: 'التكنولوجيا',
              })
            }
          >
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
                left='3'
              >
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
              الدحيح ما وراء الكواليس
            </Heading>
          </Box>

          {/* TODO: set name of single book*/}
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}

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
                term: 'science',
                title: 'العلوم',
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
                العلوم
              </Center>
            </Box>
          </TouchableOpacity>
        </ScrollView>
      </VStack>
    </Box>
  );
}
