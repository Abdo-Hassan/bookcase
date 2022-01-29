import React, { useEffect, useState } from 'react';
import {
  Box,
  FlatList,
  Heading,
  HStack,
  Image,
  VStack,
  useDisclose,
  Avatar,
  Text,
  Spinner,
} from 'native-base';
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Entypo,
  Ionicons,
} from '@expo/vector-icons';
import { TouchableOpacity, Share } from 'react-native';
import ActionSheetDetails from '../../components/ActionSheetDetails';
import { secondaryColor, primaryColor } from '../../constants/Colors';
import ActionButton from '../../components/ActionButton';
import axios from 'axios';

export default function BookListDetails({ route, navigation }) {
  const { isOpen, onClose, onOpen } = useDisclose();
  const [BooksLists, setBooksLists] = useState([]);
  const { term, title, author, authorName } = route.params;

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/?q=${term}+subject:${term}`
      );
      const first50Books = res?.data?.items.slice(0, 20);
      setBooksLists(first50Books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://abdohassan.info/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      flex={1}
      pt={3}
      bg={{
        linearGradient: {
          colors: [secondaryColor, '#000'],
          start: [0, 0],
          end: [0, 0.4],
        },
      }}
    >
      <Box ml={5} mt={10}>
        <AntDesign
          name='arrowleft'
          size={24}
          color='#fff'
          onPress={() => navigation.goBack()}
        />
      </Box>

      <Box mb={5}>
        {!author ? (
          <>
            <Image
              size={'120'}
              source={{
                uri: BooksLists[0]?.volumeInfo?.imageLinks?.smallThumbnail,
              }}
              rounded='md'
              resizeMode='cover'
              alt='bookListImage'
              alignSelf='center'
            />
            <Image
              size={'140'}
              source={{
                uri: BooksLists[1]?.volumeInfo?.imageLinks?.smallThumbnail,
              }}
              rounded='md'
              resizeMode='cover'
              alt='bookListImage'
              alignSelf='center'
              position='absolute'
              top={2}
              zIndex={1}
            />
            <Image
              size={'160'}
              source={{
                uri: BooksLists[2]?.volumeInfo?.imageLinks?.smallThumbnail,
              }}
              rounded='md'
              resizeMode='cover'
              alt='bookListImage'
              alignSelf='center'
              position='absolute'
              zIndex={2}
              top={6}
            />
          </>
        ) : (
          <Avatar bg='amber.900' size='2xl' alignSelf='center'>
            <HStack alignItems='center' justifyContent='center'>
              <Text fontSize='40'>
                {authorName.split('')[0]}
                {authorName.split('')[1]}
              </Text>
            </HStack>
          </Avatar>
        )}

        {author && (
          <Heading
            fontSize={20}
            textAlign='center'
            color='#fff'
            mt={title ? 20 : author ? 5 : 10}
          >
            {authorName}
          </Heading>
        )}

        {author && (
          <Heading fontSize={14} textAlign='center' color='#ccc' mt={3}>
            Author
          </Heading>
        )}

        {author && (
          <>
            <Box alignSelf='center' my={3}>
              <ActionButton
                title='Follow'
                color={secondaryColor}
                author={true}
                auth={false}
              />
            </Box>
            <HStack
              space={1}
              alignItems='center'
              justifyContent='center'
              mb={1}
            >
              <Ionicons name='people-sharp' size={15} color='#ccc' />
              <Text color='#ccc'>131 Followers</Text>
            </HStack>
          </>
        )}

        <HStack space={10} mx={3} my={4}>
          <Heading fontSize='19' color='#fff' flex={1} textAlign='left' ml={2}>
            {title}
          </Heading>

          <TouchableOpacity activeOpacity={0.4}>
            <Feather name='send' size={24} color='#ccc' onPress={onShare} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.4}>
            <MaterialCommunityIcons name='sort' size={24} color='#ccc' />
          </TouchableOpacity>
        </HStack>

        {BooksLists && BooksLists.length !== 0 ? (
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            // h='200'
            data={BooksLists}
            renderItem={({ item }) => {
              return (
                <Box pl='4' pr='5' py='2'>
                  <HStack space={2}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() =>
                        navigation.navigate('bookDetails', {
                          item,
                        })
                      }
                    >
                      <HStack space={4}>
                        <Image
                          size='100'
                          rounded='lg'
                          source={{
                            uri: item?.volumeInfo?.imageLinks?.smallThumbnail,
                          }}
                          alt='bookDetails'
                        />
                        <VStack space={2} alignSelf='center'>
                          <Heading
                            fontSize='15'
                            color={secondaryColor}
                            textAlign='left'
                          >
                            {item?.volumeInfo?.title.length > 25
                              ? `${item?.volumeInfo?.title.slice(0, 25)}...`
                              : item?.volumeInfo?.title}
                          </Heading>
                          <Heading fontSize='15' color={secondaryColor}>
                            Audio Book
                          </Heading>
                          {item?.volumeInfo?.authors && (
                            <Heading fontSize='15' color={secondaryColor}>
                              {/* By: {item?.volumeInfo?.authors[0]} */}
                              By:{' '}
                              {item?.volumeInfo?.authors[0].length > 21
                                ? `${item?.volumeInfo?.authors[0].slice(
                                    0,
                                    21
                                  )} ...`
                                : item?.volumeInfo?.authors[0]}
                            </Heading>
                          )}
                        </VStack>
                      </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.4} onPress={onOpen}>
                      <Box mt={7} ml={7}>
                        <Entypo
                          name='dots-three-vertical'
                          size={17}
                          color='#ccc'
                        />
                      </Box>
                    </TouchableOpacity>

                    <ActionSheetDetails isOpen={isOpen} onClose={onClose} />
                  </HStack>
                </Box>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Spinner
            accessibilityLabel='Loading books'
            color={primaryColor}
            size='lg'
            mt={5}
            justifyContent='center'
          />
        )}
      </Box>
    </Box>
  );
}
