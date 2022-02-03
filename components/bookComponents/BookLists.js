import { Entypo } from '@expo/vector-icons';
import {
  HStack,
  Skeleton,
  Box,
  FlatList,
  Image,
  Heading,
  VStack,
  useDisclose,
} from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { secondaryColor } from '../../constants/Colors';
import ActionSheetDetails from '../ActionSheetDetails';

const BookLists = ({ navigation }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const favoriteBooks = useSelector((state) => state.userBooks.favoriteBooks);
  return (
    <>
      {favoriteBooks && favoriteBooks.length !== 0 ? (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          h='400'
          data={favoriteBooks}
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
                          uri: item?.bookImage,
                        }}
                        alt='bookDetails'
                      />
                      <VStack space={2} alignSelf='center' w='150'>
                        <Heading
                          fontSize='15'
                          color={secondaryColor}
                          textAlign='left'>
                          {item?.bookTitle.length > 25
                            ? `${item?.bookTitle.slice(0, 25)}...`
                            : item?.bookTitle}
                        </Heading>

                        {item?.bookAuthor && (
                          <Heading fontSize='15' color={secondaryColor}>
                            By:{' '}
                            {item?.bookAuthor[0].length > 21
                              ? `${item?.bookAuthor[0].slice(0, 21)} ...`
                              : item?.bookAuthor[0]}
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

                  <ActionSheetDetails
                    isOpen={isOpen}
                    onClose={onClose}
                    favoriteBook
                  />
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
    </>
  );
};

export default BookLists;
