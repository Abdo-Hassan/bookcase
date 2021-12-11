import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  VStack,
  Heading,
  Avatar,
  Button,
  HStack,
  Progress,
  Spinner,
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
import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { uploadProfileImage } from '../../redux/actions/userDataActions';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth.userAuth);
  const userProfile = useSelector((state) => state.userData.userProfile);

  const userPhoto = userProfile?.userPhoto;
  const userPhotoProgress = userProfile?.userPhotoProgress;

  const [uploadImageLoading, setUploadImageLoading] = useState(false);

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
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const split = result.uri.split('/');
      const imageName = split[split.length - 1];
      const imageUrl = result.uri;
      dispatch(uploadProfileImage(imageName, imageUrl, userAuth?.userId));

      if (userPhotoProgress < 100) {
        setUploadImageLoading(true);
      } else {
        setUploadImageLoading(false);
      }
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
          {userPhoto ? (
            <Image
              size='lg'
              rounded='full'
              source={{ uri: userPhoto }}
              alignSelf='center'
              alt='profileImage'
              key={userPhoto}
            />
          ) : (
            <Avatar bg='#888' size='xl'>
              {uploadImageLoading ? (
                <Spinner color='warning.500' size='xl' />
              ) : (
                <AntDesign name='picture' size={40} color='#fff' />
              )}
            </Avatar>
          )}
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
            Hi, {userProfile?.firstName} {userProfile?.lastName}
          </Heading>
          <Text fontSize='13' color='#fff'>
            2
          </Text>
          <Text fontSize='15' color='#ccc' mt={-3} mb={4}>
            Following
          </Text>
        </VStack>

        <Button
          onPress={() =>
            navigation.navigate('profileEdit', {
              pickImage,
            })
          }
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

      {/* <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => navigation.navigate('bookshelf')}
      >
        <HStack
          borderWidth={2}
          bgColor='#1A1A1A'
          py={4}
          rounded='lg'
          mt={20}
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
      </TouchableOpacity> */}
    </Box>
  );
}
