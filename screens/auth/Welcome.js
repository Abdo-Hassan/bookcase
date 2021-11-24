import React from 'react';
import {
  Box,
  Image,
  VStack,
  PresenceTransition,
  Heading,
  Button,
} from 'native-base';
import AuthButton from '../../components/AuthButton';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Dimensions, TouchableOpacity } from 'react-native';
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

export default function Welcome() {
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

      <VStack alignItems='center' bg='#c5c3e4' flex={1}>
        {/* slider */}
        <SwiperFlatList
          index={2}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          data={texts}
          renderItem={({ item }) => (
            <Box width={width} justifyContent='center' px='3' height={200}>
              <Heading fontSize='28' color='#474375' textAlign='center' mb='2'>
                {item.title}
              </Heading>
              <Heading fontSize='18' color='#474375' textAlign='center'>
                {item.subTitle}
              </Heading>
            </Box>
          )}
        />
        {/* try */}
        <AuthButton title='Register' color='#6C63FF' />
        {/* login */}
        <AuthButton title='Log in' color='#fff' />
      </VStack>
    </Box>
  );
}