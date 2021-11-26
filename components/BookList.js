import React from 'react';
import { HStack, Heading, Badge, Image } from 'native-base';
import { Feather, Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native';
import { primaryColor } from '../constants/Colors';

export default function BookList({ DummyBooks, title, navigation }) {
  console.log('BookList - navigation', navigation);
  const renderBookList = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate('bookDetails', {
            books: DummyBooks,
            bookImage: item.image,
          })
        }
      >
        <Badge
          rounded='full'
          mb={-9}
          mr={-1}
          p={1.5}
          zIndex={1}
          variant='solid'
          alignSelf='flex-end'
          bg={primaryColor}
        >
          <Feather name='headphones' size={14} color='#fff' />
        </Badge>
        <Image
          source={item.image}
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
            books: DummyBooks,
            image1: DummyBooks[0].image,
            image2: DummyBooks[1].image,
            image3: DummyBooks[2].image,
            title,
          })
        }
      >
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
        data={DummyBooks}
        renderItem={renderBookList}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
