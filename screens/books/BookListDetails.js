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
  Skeleton,
} from 'native-base';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { secondaryColor } from '../../constants/Colors';
import ActionButton from '../../components/ActionButton';
import axios from 'axios';

export default function BookListDetails({ route, navigation }) {
  const { isOpen, onClose, onOpen } = useDisclose();
  const [booksLists, setBooksLists] = useState([]);
  const [authorBooks, setAuthorBooks] = useState([]);
  const { term, title, author, authorName, num, bookListCategory, category } =
    route.params;

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/?q=${term}+subject:${term}`
      );
      const books = res?.data?.items;
      setBooksLists(books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchAuthorBooks = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/?q=${term}+inauthor:${authorName}`
      );
      const authorBooks = res?.data?.items;
      setAuthorBooks(authorBooks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthorBooks();
  }, [author]);

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
      }}>
      <Box ml={5} mt={10}>
        <AntDesign
          name='arrowleft'
          size={24}
          color='#fff'
          onPress={() => navigation.goBack()}
        />
      </Box>

      <Box mb={5}>
        {!author && num ? (
          // FIXME:FIX Invalid call at line 91: require("../../assets/bookCover" + num + ".jpg")
          <Image
            // source={require(`../../assets/bookCover${num}.jpg`)}
            source={require(`../../assets/bookCover${4}.jpg`)}
            alt='image'
            size={'200'}
            rounded='lg'
            alignSelf='center'
            // height={120}
            mb={1}
            resizeMode='cover'
          />
        ) : (
          <Avatar bg='amber.900' size='2xl' alignSelf='center'>
            {author && (
              <HStack alignItems='center' justifyContent='center'>
                <Text fontSize='40'>
                  {authorName.split('')[0]}
                  {authorName.split('')[1]}
                </Text>
              </HStack>
            )}
          </Avatar>
        )}

        {author && (
          <Heading
            fontSize={20}
            textAlign='center'
            color='#fff'
            mt={title ? 20 : author ? 5 : 10}>
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
              mb={1}>
              <Ionicons name='people-sharp' size={15} color='#ccc' />
              <Text color='#ccc'>131 Followers</Text>
            </HStack>
          </>
        )}

        <HStack space={10} mx={3} my={4}>
          <Heading fontSize='19' color='#fff' flex={1} textAlign='left' ml={2}>
            {title}
          </Heading>
        </HStack>

        {(booksLists && booksLists.length !== 0) ||
        (bookListCategory && bookListCategory.length !== 0) ? (
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            h='400'
            data={
              category ? bookListCategory : author ? authorBooks : booksLists
            }
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
                      }>
                      <HStack space={3}>
                        <Image
                          size='100'
                          rounded='lg'
                          source={{
                            uri: item?.volumeInfo?.imageLinks?.smallThumbnail,
                          }}
                          alt='bookDetails'
                        />
                        <VStack space={2} alignSelf='center' w='150'>
                          <Heading
                            fontSize='15'
                            color={secondaryColor}
                            textAlign='left'>
                            {item?.volumeInfo?.title.length > 25
                              ? `${item?.volumeInfo?.title.slice(0, 25)}...`
                              : item?.volumeInfo?.title}
                          </Heading>

                          {item?.volumeInfo?.authors && (
                            <Heading fontSize='15' color={secondaryColor}>
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
                  </HStack>
                </Box>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          ['1', '2', '3'].map((skeleton, i) => (
            <HStack space={8} rounded='md' p='4' key={i}>
              <Skeleton flex='1' h='70' rounded='lg' />
              <VStack flex='3' space='4' alignSelf='center'>
                <Skeleton size='200' h='3' rounded='full' />
                <Skeleton size='200' h='3' rounded='full' />
                <Skeleton size='200' h='3' rounded='full' />
              </VStack>
            </HStack>
          ))
        )}
      </Box>
    </Box>
  );
}
