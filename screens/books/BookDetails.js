import React from 'react';
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
  VStack,
} from 'native-base';
import { secondaryColor, textColor } from '../../constants/Colors';
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native';
import ActionSheetDetails from '../../components/ActionSheetDetails';
import BookList from '../../components/BookList';
import ActionButton from '../../components/ActionButton';
import Reviews from '../../components/Reviews';

export default function BookDetails({ route, navigation }) {
  const { books, bookImage } = route.params;
  const { isOpen, onClose, onOpen } = useDisclose();

  const handleNavigate = (item) => {
    if (item.withIcon && item.title === '1.3 Ratings') {
      navigation.navigate('reviews');
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

  const tags = [
    { id: 1, title: 'Biography' },
    { id: 2, title: 'Autobiography' },
    { id: 3, title: 'Success Story' },
    { id: 4, title: 'Egyptian Slang' },
    { id: 5, title: 'Celebrity biography' },
    { id: 6, title: 'Inspiring' },
    { id: 7, title: 'Heartwarming' },
    { id: 8, title: 'Inspiring men' },
  ];

  const renderBookInfo = ({ item }) => {
    return (
      <HStack mx={4} my={3} alignItems='center' justifyContent='center'>
        <TouchableOpacity
          activeOpacity={
            item.withIcon && item.title === '1.3 Ratings' ? 0.4 : 1
          }
        >
          <VStack space={1}>
            <Heading fontSize='12' color='#ccc' textAlign='center' color='#ccc'>
              {item.title}
            </Heading>

            <HStack
              alignItems='center'
              space={1}
              justifyContent='center'
              onPress={() => handleNavigate(item)}
            >
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
        py={2}
      >
        <Text color='#fff' fontWeight='bold'>
          #{item.title}
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
            <TouchableOpacity activeOpacity={0.4}>
              <Box bgColor={secondaryColor} rounded='full' p={4}>
                <Feather name='headphones' size={22} color='#fff' />
              </Box>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.4}>
              <Box bgColor={textColor} rounded='full' p={4}>
                <MaterialIcons name='favorite-border' color='#fff' size={22} />
              </Box>
            </TouchableOpacity>
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
        <Box mx={3} my={6}>
          <Heading fontSize='16' color='#ccc' textAlign='right' mb={3}>
            الدحيح : ما وراء الكواليس
          </Heading>
          <Heading fontSize='16' color='#ccc' textAlign='right' mb={3}>
            كواليس برنامج الدحيح وسيرة أحمد الغندور الشخصية فى كتاب واحد
          </Heading>
          <Heading fontSize='16' color='#ccc' textAlign='right' mb={3}>
            هنسمع كواليس انطلاق برنامج الدحيح من بدايته فى قناة أحمد الغندور على
            . اليوتيوب وقتا كان برنامج فردى
          </Heading>

          <Heading fontSize='14' color='#ccc'>
            Audio Book
          </Heading>
          <Heading fontSize='14' color='#ccc'>
            Release Date: Nov 26, 2021
          </Heading>
          <Heading fontSize='14' color='#ccc'>
            Publisher &copy; Bookcase
          </Heading>
        </Box>

        {/* Play Sample of the book */}
        <ActionButton
          title='Play Sample'
          color={secondaryColor}
          author={false}
          auth={false}
        />

        {/* Book reviews */}
        <Reviews navigation={navigation} />

        <Box mx={4} my={5}>
          <Heading fontSize='17' color='#fff' mb={2}>
            Tags
          </Heading>

          {/* render tags */}
          <FlatList
            nestedScrollEnabled
            numColumns={2}
            vertical
            data={tags}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderTags}
          />
        </Box>

        <BookList
          DummyBooks={books}
          title='Similar titles'
          navigation={navigation}
        />
      </ScrollView>
    </Box>
  );
}
