import { Box, Heading, HStack, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  customPrimaryColor,
  customSecondaryColor,
} from '../../constants/Colors';
import { changeAppTheme } from '../../redux/actions/userDataActions';

export default function UserSettings() {
  const userAuth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const handleAppTheme = (theme, userId) => {
    dispatch(changeAppTheme(theme, userId));
  };

  return (
    <Box flex={1} bg='#000'>
      <Heading fontSize='17' color='#fff' m={4} textAlign='center'>
        App Theme
      </Heading>
      <VStack space={5} m={3} alignItems='center' justifyContent='center'>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => handleAppTheme('#E8592A', userAuth?.userId)}
        >
          <Box bg='#E8592A' w='20' h='20' rounded='full'></Box>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => handleAppTheme('#D06224', userAuth?.userId)}
        >
          <Box bg='#D06224' w='20' h='20' rounded='full'></Box>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => handleAppTheme('#49081E', userAuth?.userId)}
        >
          <Box bg='#49081E' w='20' h='20' rounded='full'></Box>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => handleAppTheme(customPrimaryColor, userAuth?.userId)}
        >
          <Box bg={customPrimaryColor} w='20' h='20' rounded='full'></Box>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => handleAppTheme(customSecondaryColor, userAuth?.userId)}
        >
          <Box bg={customSecondaryColor} w='20' h='20' rounded='full'></Box>
        </TouchableOpacity>
      </VStack>
    </Box>
  );
}
