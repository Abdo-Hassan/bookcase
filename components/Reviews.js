import React from 'react';
import { Heading, HStack, Box, Avatar, FlatList, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Reviews({ navigation }) {
  const reviews = [
    {
      id: 1,
      commenter: 'Abdo Hassan',
      date: 'Nov 26,2021',
      comment:
        'انا الكاتب ولكن مستمتع جدا بسماع الكتاب بصوت غندور كأنى باسمعه لاول مرة ❤',
    },
    {
      id: 2,
      commenter: 'Abdo Hassan',
      date: 'Nov 26,2021',
      comment:
        'انا الكاتب ولكن مستمتع جدا بسماع الكتاب بصوت غندور كأنى باسمعه لاول مرة ❤',
    },
    {
      id: 3,
      commenter: 'Abdo Hassan',
      date: 'Nov 26,2021',
      comment:
        'انا الكاتب ولكن مستمتع جدا بسماع الكتاب بصوت غندور كأنى باسمعه لاول مرة ❤',
    },
    {
      id: 4,
      commenter: 'Abdo Hassan',
      date: 'Nov 26,2021',
      comment:
        'انا الكاتب ولكن مستمتع جدا بسماع الكتاب بصوت غندور كأنى باسمعه لاول مرة ❤',
    },
  ];

  const renderReviews = ({ item }) => (
    <TouchableOpacity activeOpacity={0.4}>
      <Box px={4} py={4} mx={2} bgColor='#222' rounded='md'>
        <HStack space={3}>
          <Avatar bg='#ccc' size='md'>
            <Ionicons name='person' size={24} color='#888' />
          </Avatar>

          <VStack space={2}>
            <Heading fontSize='16'>{item.commenter}</Heading>
            <HStack space={1} alignItems='center' justifyContent='center'>
              <AntDesign name='star' size={18} color='gold' />
              <AntDesign name='star' size={18} color='gold' />
              <AntDesign name='star' size={18} color='gold' />
              <AntDesign name='star' size={18} color='gold' />
              <Heading fontSize='12' color='#ccc'>
                {item.date}
              </Heading>
            </HStack>
          </VStack>
        </HStack>
        <Heading fontSize='16' color='#fff' w={240} mt={3}>
          {item.comment}
        </Heading>
      </Box>
    </TouchableOpacity>
  );

  return (
    <Box mx={3}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('reviews')}
      >
        <HStack mx={4} my={4}>
          <Heading fontSize='18' flex={1} textAlign='left' color='#fff'>
            Reviews
          </Heading>
          <Heading fontSize='17' color='#6d6c6c'>
            <Ionicons name='chevron-forward' size={24} color='#fff' />
          </Heading>
        </HStack>
      </TouchableOpacity>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={reviews}
        renderItem={renderReviews}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}
