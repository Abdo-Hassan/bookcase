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
  Center,
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
          keyExtractor={(item) => item.bookId}
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

                        {item?.bookAuthor !== '' && (
                          <Heading fontSize='15' color={secondaryColor}>
                            By:{' '}
                            {item?.bookAuthor?.length > 21
                              ? `${item?.bookAuthor?.slice(0, 21)} ...`
                              : item?.bookAuthor}
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
                    bookReadOnline={item?.bookReadOnline}
                    isOpen={isOpen}
                    onClose={onClose}
                    favoriteBook
                  />
                </HStack>
              </Box>
            );
          }}
        />
      ) : (
        <Center flex={1}>
          <Heading fontSize='17' fontWeight='normal'>
            You favorite books will show here!
          </Heading>
        </Center>
      )}
    </>
  );
};

export default BookLists;
