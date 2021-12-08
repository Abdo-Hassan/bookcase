import React, { useState } from 'react';
import { Box, Input, VStack, Image } from 'native-base';
import { primaryColor, secondaryColor } from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import ActionButton from '../../components/ActionButton';
import { editProfileUsername } from '../../redux/actions/userDataActions';
import { useSelector } from 'react-redux';

export default function ProfileEdit({ route }) {
  const { pickImage } = route.params;
  const userProfile = useSelector((state) => state.userProfile);
  const userAuth = useSelector((state) => state.userAuth);

  const [firstNameInput, setFirstName] = useState(userProfile?.firstName);
  const [lastNameInput, setLastName] = useState(userProfile?.lastName);

  return (
    <Box flex={1} bg='#000' pt={10}>
      <VStack mb={6}>
        <Image
          rounded='full'
          size='lg'
          source={{ uri: userProfile?.userPhoto }}
          alignSelf='center'
          key={userProfile?.userPhoto}
          alt='profileImage'
        />
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
        onClick={editProfileUsername(
          userAuth?.userId,
          firstNameInput,
          lastNameInput
        )}
        title='Submit'
        color={primaryColor}
        author={false}
        auth={true}
      />
    </Box>
  );
}
