import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  useDisclose,
  VStack,
} from 'native-base';
import { secondaryColor, textColor } from '../../constants/Colors';
import { AntDesign, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import ActionSheetDetails from '../../components/ActionSheetDetails';
import BookList from '../../components/BookList';

export default function BookDetails({ route, navigation }) {
  const { books, bookImage } = route.params;
  const { isOpen, onClose, onOpen } = useDisclose();
  return (
    <Box
      pt={10}
      flex={1}
      bg={{
        linearGradient: {
          colors: [secondaryColor, '#000'],
          start: [0, 0],
          end: [0, 0.4],
        },
      }}
    >
      <HStack alignItems='center' justifyContent='space-between' mx={5} pt={5}>
        <AntDesign
          name='arrowleft'
          size={24}
          color='#fff'
          onPress={() => navigation.goBack()}
        />

        <TouchableOpacity activeOpacity={0.4} onPress={onOpen}>
          <Entypo name='dots-three-vertical' size={17} color='#fff' />
        </TouchableOpacity>
      </HStack>
      <ActionSheetDetails isOpen={isOpen} onClose={onClose} />
      <ScrollView>
        <Image
          mt={6}
          source={bookImage}
          size='250'
          alt='bookImage'
          alignSelf='center'
          rounded='xl'
        />

        <Heading fontSize='22' color='#fff' my={6} textAlign='center'>
          الدحيح- ما وراء الكواليس
        </Heading>

        <VStack justifyContent='center' space={3} alignItems='center'>
          <Heading fontSize='17' color='#ccc'>
            By:{' '}
            <Text
              fontSize='17'
              color={secondaryColor}
              onPress={() =>
                navigation.navigate('bookListDetails', {
                  books,
                  author: true,
                  authorName: 'طاهر المعتز بالله',
                })
              }
            >
              طاهر المعتز بالله
            </Text>
          </Heading>

          <Heading
            fontSize='17'
            color='#ccc'
            onPress={() =>
              navigation.navigate('bookListDetails', {
                books,
                author: true,
                authorName: 'أحمد الغندور',
              })
            }
          >
            With:{' '}
            <Text fontSize='17' color={secondaryColor}>
              أحمد الغندور
            </Text>
          </Heading>
        </VStack>

        <VStack space={4} alignItems='center' justifyContent='center'>
          <HStack space={9} mt={6}>
            <Box bgColor={secondaryColor} rounded='full' p={4}>
              <Feather name='headphones' size={22} color='#fff' />
            </Box>

            <Box bgColor={textColor} rounded='full' p={4}>
              <MaterialIcons name='favorite-border' color='#fff' size={22} />
            </Box>
          </HStack>

          <HStack space={10}>
            <Heading fontSize='16' color='#ccc' mx={1}>
              Listen
            </Heading>
            <Heading fontSize='16' color='#ccc' mx={2}>
              Save
            </Heading>
          </HStack>
        </VStack>

        <BookList
          DummyBooks={books}
          title='Similar titles'
          navigation={navigation}
        />
      </ScrollView>
    </Box>
  );
}
