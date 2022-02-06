import React, { useState, useEffect } from 'react';
import { HStack, Heading, Badge, Image, Skeleton, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function BookList({ term, title, navigation, similarBooks }) {
  const [booksLists, setBooksLists] = useState([]);
  const [similarBooksLists, setSimilarBooksLists] = useState([]);

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

  const fetchSimilarBooks = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/?q=${similarBooks}`
      );
      const similarBooksLists = res?.data?.items.slice(0, 10);
      setSimilarBooksLists(similarBooksLists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (similarBooks) fetchSimilarBooks();
  }, [similarBooks]);

  const renderBookList = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate('bookDetails', {
            item,
          })
        }>
        {item ? (
          <Image
            source={{ uri: item?.volumeInfo?.imageLinks?.smallThumbnail }}
            alt='book image'
            size={'130'}
            rounded='lg'
            resizeMode='cover'
            mb={4}
            mx={2}
          />
        ) : (
          <Skeleton h='10' size='200' rounded='md' px='1' />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate('bookListDetails', {
            title,
            author: false,
            bookListCategory: similarBooks ? similarBooksLists : booksLists,
            category: true,
            num: 4,
          })
        }>
        <HStack mx={4} my={4}>
          <Heading fontSize='18' flex={1} textAlign='left' color='#fff'>
            {title}
          </Heading>
          <Heading fontSize='17' color='#6d6c6c'>
            <Ionicons name='chevron-forward' size={24} color='#fff' />
          </Heading>
        </HStack>
      </TouchableOpacity>

      {(similarBooksLists && similarBooksLists.length !== 0) ||
      (booksLists && booksLists.length !== 0) ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={similarBooks ? similarBooksLists : booksLists}
          renderItem={renderBookList}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <HStack space={4} mx={3} mb={3}>
          <Skeleton flex='1' h='90' rounded='lg' />
          <Skeleton flex='1' h='90' rounded='lg' />
          <Skeleton flex='1' h='90' rounded='lg' />
        </HStack>
      )}
    </>
  );
}
