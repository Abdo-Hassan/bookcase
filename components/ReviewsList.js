import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  VStack,
  Text,
} from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ActionButton from '../components/ActionButton';
import { secondaryColor } from '../constants/Colors';

export default function ReviewsList({ allReviews, navigation }) {
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
      commenter: 'Esraa Saber',
      date: 'Nov 26,2021',
      comment:
        'الكتاب رائع انصح اى حد بقرائته والتمتع بالقصص الرائعة شكرا احمد الغندور',
    },
    {
      id: 3,
      commenter: 'Sara Islam',
      date: 'Nov 26,2021',
      comment:
        'من اجمل الكتب التى قرأتها مؤخرا الكتاب رائع وخصوصا صوت احمد الغندور شكرا ',
    },
    {
      id: 4,
      commenter: 'Heba Ahmed',
      date: 'Nov 26,2021',
      comment: 'تفوقت على نفسك هذه المرة يا احمد عاش وربنا يوفقك فى اللى جى ',
    },
    {
      id: 5,
      commenter: 'Mohamed Ali',
      date: 'Nov 26,2021',
      comment:
        'من روائع الدحيح هذا الكتاب الذى يحكى قصة كفاح احمد الغندور من نجاح لنجاح',
    },
  ];

  const handleNavigate = () => {
    if (!allReviews) {
      navigation.navigate('reviews');
    }
  };

  const renderReviews = ({ item }) => (
    <TouchableOpacity
      activeOpacity={allReviews ? 1 : 0.4}
      onPress={() => handleNavigate()}
    >
      <Box
        px={4}
        py={3}
        mx={2}
        my={allReviews ? 1 : 0}
        bgColor='#222'
        rounded='md'
      >
        <HStack space={3}>
          <Avatar bg='#ccc' size='md'>
            <Ionicons name='person' size={30} color='#888' />
          </Avatar>

          <VStack space={2}>
            <Heading fontSize='16'>{item.commenter}</Heading>
            <HStack
              space={1}
              mr={3}
              alignItems='center'
              justifyContent='center'
            >
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <AntDesign name='star' size={14} color='gold' />
              <Heading fontSize='12' color='#ccc' ml={2}>
                {item.date}
              </Heading>
            </HStack>
          </VStack>

          {allReviews && (
            <TouchableOpacity activeOpacity={0.4}>
              <Box ml={10}>
                <Feather name='flag' size={26} color='#fa8484' />
              </Box>
            </TouchableOpacity>
          )}
        </HStack>

        <Text
          lineHeight='xl'
          fontSize='15'
          fontWeight='bold'
          color='#fff'
          w={allReviews ? 'auto' : 240}
          my={4}
        >
          {item.comment}
        </Text>

        {allReviews && (
          <HStack space={6} mt={2}>
            <HStack space={3} alignItems='center' justifyContent='center'>
              <MaterialIcons name='favorite-border' color='#ccc' size={20} />
              <Heading fontSize='15' color='#ccc'>
                210 Likes
              </Heading>
            </HStack>

            <HStack space={3} alignItems='center' justifyContent='center'>
              <EvilIcons name='comment' size={26} color='#ccc' />
              <Heading fontSize='15' color='#ccc'>
                18 Comment
              </Heading>
            </HStack>
          </HStack>
        )}
      </Box>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList
        horizontal={!allReviews}
        Vertical={allReviews}
        showsHorizontalScrollIndicator={false}
        data={reviews}
        renderItem={renderReviews}
        keyExtractor={(item) => item.id}
      />
      {allReviews && (
        <ActionButton title='Write Review' color={secondaryColor} review />
      )}
    </>
  );
}
