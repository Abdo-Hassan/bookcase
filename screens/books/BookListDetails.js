import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  HStack,
  Image,
  VStack,
  useDisclose,
} from 'native-base';
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Entypo,
} from '@expo/vector-icons';
import { TouchableOpacity, Share } from 'react-native';
import ActionSheetDetails from '../../components/ActionSheetDetails';
import { secondaryColor, textColor } from '../../constants/Colors';

export default function BookListDetails({ route, navigation }) {
  const { isOpen, onClose, onOpen } = useDisclose();
  const { books, image1, image2, image3, title } = route.params;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://abdohassan.info/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      flex={1}
      pt={3}
      bg={{
        linearGradient: {
          colors: [secondaryColor, '#000'],
          start: [0, 0],
          end: [0, 0.4],
        },
      }}
    >
      <Box ml={5} mt={10}>
        <AntDesign
          name='arrowleft'
          size={24}
          color='#fff'
          onPress={() => navigation.goBack()}
        />
      </Box>

      <Box mb={5}>
        <Image
          size={'120'}
          source={image1}
          rounded='md'
          resizeMode='cover'
          alt='bookListImage'
          alignSelf='center'
        />
        <Image
          size={'140'}
          source={image2}
          rounded='md'
          resizeMode='cover'
          alt='bookListImage'
          alignSelf='center'
          position='absolute'
          top={2}
          zIndex={1}
        />
        <Image
          size={'160'}
          source={image3}
          rounded='md'
          resizeMode='cover'
          alt='bookListImage'
          alignSelf='center'
          position='absolute'
          zIndex={2}
          top={6}
        />

        <Heading fontSize={20} textAlign='center' color='#fff' mt={20} mb={5}>
          {title}
        </Heading>

        <HStack space={10} mx={3} mb={5}>
          <Heading fontSize='19' color='#fff' flex={1}>
            All titles
          </Heading>

          <TouchableOpacity activeOpacity={0.4}>
            <Feather name='send' size={24} color='#ccc' onPress={onShare} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.4}>
            <MaterialCommunityIcons name='sort' size={24} color='#ccc' />
          </TouchableOpacity>
        </HStack>

        <FlatList
          h='400'
          data={books}
          renderItem={({ item }) => (
            <Box pl='4' pr='5' py='2'>
              <HStack space={10}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() =>
                    navigation.navigate('bookDetails', {
                      bookImage: item.image,
                    })
                  }
                  flex={1}
                >
                  <HStack space={4}>
                    <Image
                      size='100'
                      rounded='lg'
                      source={item.image}
                      alt='bookDetails'
                    />
                    <VStack space={2} alignSelf='center'>
                      <Heading fontSize='15' color={textColor} textAlign='left'>
                        كتاب الدحيح
                      </Heading>
                      <Heading fontSize='15' color={textColor}>
                        Audio Book
                      </Heading>
                      <Heading fontSize='15' color={textColor}>
                        By: طاهر المعتز بالله
                      </Heading>
                    </VStack>
                  </HStack>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.4} onPress={onOpen}>
                  <Box mt={7} ml={7}>
                    <Entypo name='dots-three-vertical' size={17} color='#ccc' />
                  </Box>
                </TouchableOpacity>

                <ActionSheetDetails isOpen={isOpen} onClose={onClose} />
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
}
