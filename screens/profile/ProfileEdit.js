import React, { useState } from 'react';
import { Box, Input, VStack, Image, HStack, Spinner } from 'native-base';
import { customPrimaryColor, primaryColor } from '../../constants/Colors';
import { Entypo, AntDesign } from '@expo/vector-icons';
import ActionButton from '../../components/ActionButton';
import { editProfileUsername } from '../../redux/actions/userDataActions';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileEdit({ route, navigation }) {
  const { pickImage } = route.params;
  const userProfile = useSelector((state) => state.userData.userProfile);
  const userAuth = useSelector((state) => state.auth.userAuth);
  const dispatch = useDispatch();

  const userPhoto = userProfile?.userPhoto;
  const userPhotoProgress = userProfile?.userPhotoProgress;

  const [editNameLoading, setEditNameLoading] = useState(false);
  const [firstNameInput, setFirstName] = useState(userProfile?.firstName);
  const [lastNameInput, setLastName] = useState(userProfile?.lastName);

  const editProfile = () => {
    if (firstNameInput && lastNameInput) {
      setEditNameLoading(true);
      dispatch(
        editProfileUsername(userAuth?.userId, firstNameInput, lastNameInput)
      );
      navigation.navigate('profile');
    } else {
      setEditNameLoading(false);
    }
  };

  return (
    <Box flex={1} bg='#000' pt={5}>
      <VStack mb={6}>
        <Box alignSelf='center' rounded='full'>
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
            <Box bg='#888' p={7} rounded='full'>
              {userPhotoProgress < 100 ? (
                <Spinner color='warning.500' size='lg' />
              ) : (
                <AntDesign name='picture' size={40} color='#fff' />
              )}
            </Box>
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
          right={130}
          top='2/3'
        >
          <Entypo name='camera' size={24} color='#fff' onPress={pickImage} />
        </Box>
      </VStack>
      <VStack mx={4} space={4} flex={1}>
        <Input
          borderWidth={0}
          fontSize={15}
          variant='filled'
          placeholder='First Name'
          py={3}
          value={firstNameInput}
          onChangeText={setFirstName}
          isInvalid={false}
        />
        <Input
          borderWidth={0}
          fontSize={15}
          variant='filled'
          placeholder='Last Name'
          py={3}
          mb={3}
          value={lastNameInput}
          onChangeText={setLastName}
          isInvalid={false}
        />
      </VStack>

      <ActionButton
        onClick={editProfile}
        title='Submit'
        color={primaryColor}
        auth={true}
        author={false}
        editNameLoading={editNameLoading}
      />
    </Box>
  );
}
