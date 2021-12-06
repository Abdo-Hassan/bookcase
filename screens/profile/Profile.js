import React, { useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  Heading,
  Avatar,
  Button,
  HStack,
  Progress,
  Image,
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  customColor,
  customPrimaryColor,
  customSecondaryColor,
  primaryColor,
} from '../../constants/Colors';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
// import { uploadProfileImage } from '../../redux/actions/userDataActions';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.profileImage);
  const userRecord = useSelector((state) => state.userRecord);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const split = result.uri.split('/');
      const imageName = split[split.length - 1];
      const imageUrl = result.base64;
      // dispatch(uploadProfileImage(imageUrl, imageName));
    }
  };

  return (
    <Box flex={1} bg='#000' px={4}>
      <StatusBar style='light' />

      <VStack mt={20} pt={20} pb={8} bg={customPrimaryColor} rounded='xl'>
        <Box
          bg={customPrimaryColor}
          p={3}
          position='absolute'
          alignSelf='center'
          top={-50}
          rounded='full'
        >
          <Avatar size='xl' source={{ uri: profileImage }} alignSelf='center' />
        </Box>
        <Box
          bg={primaryColor}
          rounded='full'
          w='10'
          alignItems='center'
          justifyContent='center'
          p={2}
          position='absolute'
          right={110}
          top={6}
        >
          <Entypo name='camera' size={24} color='#fff' onPress={pickImage} />
        </Box>

        <VStack space={3} alignItems='center' justifyContent='center'>
          <Heading fontSize='19' color='#fff'>
            Hi, {userRecord?.name}
          </Heading>
          <Text fontSize='13' color='#fff'>
            2
          </Text>
          <Text fontSize='15' color='#ccc' mt={-3} mb={4}>
            Following
          </Text>
        </VStack>

        <Button
          bgColor={customSecondaryColor}
          w='40%'
          alignSelf='center'
          rounded='full'
          px={3}
          py={3}
          _text={{
            color: customColor,
            fontSize: '16',
            fontWeight: 'bold',
          }}
          position='absolute'
          bottom={-20}
        >
          Edit Profile
        </Button>
      </VStack>

      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => navigation.navigate('bookshelf')}
      >
        <HStack
          bgColor='#1A1A1A'
          py={4}
          rounded='lg'
          mt={10}
          alignItems='center'
          justifyContent='space-around'
        >
          <MaterialCommunityIcons
            name='bookshelf'
            size={50}
            color={primaryColor}
          />
          <Text fontSize='20' color='#fff' mr={20}>
            Favorite Books
          </Text>
        </HStack>
      </TouchableOpacity>

      {/* <Progress colorScheme='warning' value={65} /> */}
    </Box>
  );
}
