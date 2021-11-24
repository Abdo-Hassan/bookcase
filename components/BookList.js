import { HStack, Heading, Badge, Image } from 'native-base';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native';

export default function BookList({ DummyBooks, title }) {
  const renderBookList = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.6}>
        <Badge
          rounded='full'
          mb={-9}
          mr={-1}
          p={1.5}
          zIndex={1}
          variant='solid'
          alignSelf='flex-end'
        >
          <Feather name='headphones' size={14} color='#fff' />
        </Badge>
        <Image
          source={item.image}
          alt='book image'
          size={'140'}
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
      <HStack mx={4} my={4}>
        <Heading fontSize='18' flex={1} textAlign='left' color='#fff'>
          {title}
        </Heading>
        <Heading fontSize='17' color='#6d6c6c'>
          See all
        </Heading>
      </HStack>

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
