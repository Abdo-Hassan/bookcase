import React, { useState, useEffect } from 'react';
import { HStack, Heading, Badge, Image } from 'native-base';
import { Feather, Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native';
import { primaryColor } from '../constants/Colors';
import axios from 'axios';

export default function BookList({ term, title, navigation }) {
  const [BooksLists, setBooksLists] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/?q=${term}+subject:${term}`
      );
      const first20Books = res?.data?.items.slice(0, 20);
      setBooksLists(first20Books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const renderBookList = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate('bookDetails', {
            item,
          })
        }>
        <Badge
          rounded='full'
          mb={-9}
          mr={-1}
          p={1.5}
          zIndex={1}
          variant='solid'
          alignSelf='flex-end'
          bg={primaryColor}>
          <Feather name='headphones' size={14} color='#fff' />
        </Badge>
        <Image
          source={{ uri: item?.volumeInfo?.imageLinks?.smallThumbnail }}
          alt='book image'
          size={'130'}
          rounded='lg'
          resizeMode='cover'
          my={4}
          mx={2}
        />
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

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={BooksLists}
        renderItem={renderBookList}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
