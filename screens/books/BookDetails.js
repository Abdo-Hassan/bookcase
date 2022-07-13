import React, { useEffect } from 'react';
import {
  Badge,
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  useDisclose,
  useToast,
  VStack,
} from 'native-base';
import { secondaryColor, textColor } from '../../constants/Colors';
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native';
import ActionSheetDetails from '../../components/ActionSheetDetails';
import BookList from '../../components/bookComponents/BookList';
import Reviews from '../../components/reviewsComponents/Reviews';
import { addBookToFavorite } from '../../redux/actions/booksActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ActionButton from '../../components/ActionButton';
import { WebView } from 'react-native-webview';

export default function BookDetails({ route, navigation }) {
  const { item } = route.params;
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclose();
  const dispatch = useDispatch();
  const [iconName, setIconName] = useState('favorite-border');
  const [openRead, setOpenRead] = useState(false);
  const [favoriteBook, setFavoriteBook] = useState(false);
  const userAuth = useSelector((state) => state.auth.userAuth);
  const favoriteBooks = useSelector((state) => state.userBooks.favoriteBooks);

  const addToFavorite = () => {
    if (!favoriteBook) {
      setFavoriteBook(true);
      setIconName('favorite');
    } else {
      setFavoriteBook(false);
      setIconName('favorite-border');
    }
    dispatch(
      addBookToFavorite(
        favoriteBook,
        {
          bookImage:
            item?.volumeInfo?.imageLinks?.smallThumbnail || item?.bookImage,
          bookId: item?.id || item?.bookId,
          bookTitle: item?.volumeInfo?.title || item?.bookTitle,
          bookAuthor:
            item?.volumeInfo?.authors || item?.bookAuthor
              ? item?.volumeInfo?.authors[0]
              : '',
          bookDescription: item?.volumeInfo?.description
            ? item?.volumeInfo?.description
            : '',
          bookPublishedDate: item?.volumeInfo?.publishedDate,
          bookPublisher: item?.volumeInfo?.publisher
            ? item?.volumeInfo?.publisher
            : '',
          bookReadOnline: item?.accessInfo?.webReaderLink,
          bookTags: item?.volumeInfo?.categories,
        },
        userAuth?.userId
      )
    );
    toast.show({
      render: () => {
        return (
          <Box
            bg='emerald.300'
            p={2}
            rounded='sm'
            mb={5}
            w='100%'
            _text={{ color: '#000' }}>
            {favoriteBook
              ? 'Your book has been removed from bookshelf!'
              : 'Your book has been added to bookshelf!'}
          </Box>
        );
      },
    });
  };

  const checkFavorite = () => {
    const isFavoriteBook = favoriteBooks?.some(
      (book) => book.bookId === item?.id || item?.bookId
    );
    if (isFavoriteBook) {
      setFavoriteBook(true);
      setIconName('favorite');
    } else {
      setFavoriteBook(false);
      setIconName('favorite-border');
    }
  };

  useEffect(() => {
    checkFavorite();
  }, []);

  const handleNavigate = (item) => {
    if (item.withIcon && item.title === '1.3 Ratings') {
      navigation.navigate('reviews');
    }
  };

  const renderBookDescription = () => {
    if (item?.volumeInfo?.description) {
      return (
        <Heading fontSize='16' color='#ccc' textAlign='left' mb={3}>
          {item?.volumeInfo?.description.length > 250
            ? `${item?.volumeInfo?.description.slice(0, 250)}.....`
            : item?.volumeInfo?.description}
        </Heading>
      );
    } else if (item?.bookDescription) {
      return (
        <Heading fontSize='16' color='#ccc' textAlign='left' mb={3}>
          {item?.bookDescription.length > 250
            ? `${item?.bookDescription.slice(0, 250)}.....`
            : item?.bookDescription}
        </Heading>
      );
    }
  };

  const bookInfo = [
    {
      id: 1,
      title: '1.3 Ratings',
      withIcon: true,
      value: '4.7',
    },
    {
      id: 2,
      title: 'Duration',
      withIcon: true,
      value: '5h 18m',
    },
    {
      id: 3,
      title: 'Language',
      withIcon: false,
      value: 'Arabic',
    },
    {
      id: 4,
      title: 'Category',
      withIcon: false,
      value: 'Biographies',
    },
  ];

  const renderBookInfo = ({ item }) => {
    return (
      <HStack mx={4} my={3} alignItems='center' justifyContent='center'>
        <TouchableOpacity
          onPress={() => handleNavigate(item)}
          activeOpacity={
            item.withIcon && item.title === '1.3 Ratings' ? 0.4 : 1
          }>
          <VStack space={1}>
            <Heading fontSize='12' color='#ccc' textAlign='center'>
              {item.title}
            </Heading>

            <HStack alignItems='center' space={1} justifyContent='center'>
              {item.withIcon && item.title === '1.3 Ratings' ? (
                <AntDesign name='star' size={20} color='gold' />
              ) : (
                item.withIcon &&
                item.title === 'Duration' && (
                  <Ionicons name='time-outline' size={20} color='#ccc' />
                )
              )}

              <Heading fontSize='15' color='#fff' textAlign='center'>
                {item.value}
              </Heading>

              {item.withIcon && item.title === '1.3 Ratings' && (
                <Ionicons name='chevron-forward' size={20} color='#ccc' />
              )}
            </HStack>
          </VStack>
        </TouchableOpacity>
      </HStack>
    );
  };

  const renderTags = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7}>
      <Badge
        key={item.id}
        variant='solid'
        alignSelf='center'
        rounded='full'
        bgColor='#666'
        px={4}
        my={1}
        mr={1}
        py={2}>
        <Text color='#fff' fontWeight='bold'>
          #{item}
        </Text>
      </Badge>
    </TouchableOpacity>
  );

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
      }}>
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
      <ActionSheetDetails
        isOpen={isOpen}
        onClose={onClose}
        addToFavorite={addToFavorite}
        favoriteBook={favoriteBook}
        bookReadOnline={item?.accessInfo?.webReaderLink || item?.bookReadOnline}
        bookTitle={item?.volumeInfo?.title || item?.bookTitle}
      />
      <ScrollView>
        <Image
          mt={6}
          source={{
            uri:
              item?.volumeInfo?.imageLinks?.smallThumbnail || item?.bookImage,
          }}
          size='250'
          alt='bookImage'
          alignSelf='center'
          rounded='xl'
        />
        <Heading
          fontSize='22'
          color='#fff'
          my={item?.volumeInfo?.authors || item?.bookAuthor ? 6 : 4}
          textAlign='center'>
          {item?.volumeInfo?.title || item?.bookTitle}
        </Heading>

        <VStack justifyContent='center' space={3} alignItems='center'>
          {(item?.volumeInfo?.authors || item?.bookAuthor) && (
            <Heading fontSize='17' color='#ccc'>
              By:{' '}
              <Text
                fontSize='17'
                color={secondaryColor}
                onPress={() =>
                  navigation.navigate('bookListDetails', {
                    author: true,
                    category: false,
                    authorName:
                      item?.volumeInfo?.authors[0] || item?.bookAuthor,
                  })
                }>
                {item?.volumeInfo?.authors[0] || item?.bookAuthor}
              </Text>
            </Heading>
          )}
        </VStack>

        {/* add to favorite */}
        <VStack space={4} alignItems='center' justifyContent='center'>
          <HStack space={9} mt={4} alignItems='center'>
            <ActionButton
              title='Read'
              color={secondaryColor}
              auth={false}
              author={true}
              onClick={() => setOpenRead(true)}
            />

            {openRead && (
              <WebView
                style={{ flex: 1 }}
                source={{
                  uri: 'https://play.google.com/books/reader?id=V3N0DgAAQBAJ&pg=GBS.PP1&hl=&printsec=frontcover&source=gbs_api',
                }}
              />
            )}

            <TouchableOpacity activeOpacity={0.4} onPress={addToFavorite}>
              <Box bgColor={textColor} rounded='full' p={4}>
                <MaterialIcons name={iconName} color='#fff' size={22} />
              </Box>
            </TouchableOpacity>
          </HStack>
        </VStack>

        <Divider orientation='horizontal' mt={4} bgColor='#222' />

        {/* render bookInfo */}
        <FlatList
          horizontal
          data={bookInfo}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderBookInfo}
        />

        <Divider orientation='horizontal' mt='1' bgColor='#222' />

        {/* book description */}
        <Box
          mx={3}
          my={item?.volumeInfo?.description || item?.bookDescription ? 4 : 2}>
          {renderBookDescription()}

          {(item?.volumeInfo?.publisher || item?.bookPublishedDate) && (
            <Heading fontSize='14' color='#ccc'>
              Published Date:{' '}
              {item?.volumeInfo?.publishedDate || item?.bookPublishedDate}
            </Heading>
          )}

          {(item?.volumeInfo?.publisher || item?.bookPublisher) && (
            <Heading fontSize='14' color='#ccc'>
              Publisher &copy;{' '}
              {item?.volumeInfo?.publisher || item?.bookPublisher}
            </Heading>
          )}
        </Box>

        {/* Book reviews */}
        <Reviews navigation={navigation} />

        {/* render tags */}
        {(item?.volumeInfo?.categories || item?.bookTags) && (
          <Box mx={4} my={5}>
            <Heading fontSize='17' color='#fff' mb={2}>
              Tags
            </Heading>

            <FlatList
              nestedScrollEnabled
              numColumns={2}
              vertical
              data={item?.volumeInfo?.categories || item?.bookTags}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderTags}
            />
          </Box>
        )}

        <BookList
          title='Similar titles'
          navigation={navigation}
          similarBooks={item?.volumeInfo?.title || item?.bookTitle}
        />
      </ScrollView>
    </Box>
  );
}
