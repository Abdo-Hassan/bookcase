import React from 'react';
import {
  Box,
  Image,
  VStack,
  PresenceTransition,
  Heading,
  Button,
} from 'native-base';
import ActionButton from '../../components/ActionButton';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Dimensions, TouchableOpacity } from 'react-native';
import { customColor, secondaryColor } from '../../constants/Colors';
const { width } = Dimensions.get('window');

const texts = [
  {
    title: 'أقرأ كيفما تحب',
    subTitle:
      'تحميل الكتب على الجهاز أو الاستماع مباشرة من الانترنت. تحديد العلامات وتلقى المقترحات والغاء الاشتراك فى أى وقت',
  },
  {
    title: 'عالم ملئ بالقصص',
    subTitle:
      'استمع او أقرأ الكتب التى تحب فى أى وقت أو اى مكان. استماع غير محدود لعشرات الالاف من الكتب الصوتية',
  },
  {
    title: 'قصص تنتظرك لتستمع اليها',
    subTitle:
      'أختر بيت الكتب الأكثر مبيعا والقصص المميزة, وسير الشخصيات العظيمة وغيرها الكثير',
  },
];

export default function Welcome({ navigation }) {
  return (
    <Box flex={1}>
      <PresenceTransition
        visible={true}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 350,
          },
        }}
      >
        <Image
          source={require('../../assets/bookCover.jpg')}
          resizeMode='cover'
          alt='welcome cover'
          height={450}
        />
      </PresenceTransition>

      <VStack alignItems='center' bg={customColor} flex={1}>
        {/* slider */}
        <SwiperFlatList
          index={2}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          data={texts}
          renderItem={({ item }) => (
            <Box width={width} justifyContent='center' px='3' height={200}>
              <Heading fontSize='28' color='#fff' textAlign='center' mb='2'>
                {item.title}
              </Heading>
              <Heading fontSize='18' color='#fff' textAlign='center'>
                {item.subTitle}
              </Heading>
            </Box>
          )}
        />
        {/* try */}
        <ActionButton
          title='Register'
          color={secondaryColor}
          onClick={() => navigation.navigate('register')}
          auth={true}
        />
        {/* login */}
        <ActionButton title='Log in' color='#fff' auth={true} />
      </VStack>
    </Box>
  );
}
