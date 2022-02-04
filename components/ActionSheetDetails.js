import React, { useState } from 'react';
import { Actionsheet, Icon, Box, Text, Divider, HStack } from 'native-base';
import {
  MaterialIcons,
  Ionicons,
  Feather,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
  EvilIcons,
} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Popup from './Popup';

export default function ActionSheetDetails({
  isOpen,
  onClose,
  profile,
  favoriteBook,
  addToFavorite,
  navigation,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  let options;
  if (profile) {
    options = [
      {
        id: 1,
        title: 'Account',
        iconName: 'person-outline',
        iconType: <Ionicons />,
      },
      {
        id: 2,
        title: 'App',
        iconName: 'gear',
        iconType: <EvilIcons />,
      },
      {
        id: 3,
        title: 'Logout',
        iconName: 'logout',
        iconType: <MaterialIcons />,
      },
    ];
  } else {
    options = [
      {
        id: 1,
        title: favoriteBook ? 'Saved to bookshelf' : 'Add to bookshelf',
        iconName: favoriteBook ? 'favorite' : 'favorite-border',
        iconType: <MaterialIcons />,
      },
      {
        id: 2,
        title: 'Mark as finished',
        iconName: 'checkmark-sharp',
        iconType: <Ionicons />,
      },
      {
        id: 3,
        title: 'Download',
        iconName: 'download',
        iconType: <Feather />,
      },
      {
        id: 4,
        title: 'View Author',
        iconName: 'pencil',
        iconType: <SimpleLineIcons />,
      },
      {
        id: 5,
        title: 'View narrator',
        iconName: 'microphone',
        iconType: <FontAwesome />,
      },
      {
        id: 6,
        title: 'Show more titles like this',
        iconName: 'grid',
        iconType: <Feather />,
      },
      {
        id: 7,
        title: 'Give your friend a free trial',
        iconName: 'gift',
        iconType: <AntDesign />,
      },
      { id: 8, title: 'Share', iconName: 'send', iconType: <Feather /> },
    ];
  }

  const handleClickIcons = (iconName, iconId) => {
    if (profile) {
      if (iconName === 'logout') {
        setModalVisible(true);
      } else if (iconName === 'person-outline') {
        navigation.navigate('accountSettings');
      } else if (iconName === 'gear') {
        navigation.navigate('userSettings');
      }
    } else {
      if (iconId === 1) {
        addToFavorite();
        onClose();
      }
    }
  };

  return (
    <>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        size='full'
        hideDragIndicator>
        <Actionsheet.Content>
          <HStack py={3} alignItems='center' justifyContent='center'>
            <Text
              fontSize='18'
              fontWeight='bold'
              textAlign='center'
              color='#fff'
              flex={0.9}>
              {profile ? 'Settings' : 'اسم الكتاب'}
            </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={onClose}>
              <AntDesign name='close' size={20} color='#ccc' />
            </TouchableOpacity>
          </HStack>
          <Divider mb={2} bg='#666' />
          {options.map((option) => (
            <Actionsheet.Item
              onPress={() => handleClickIcons(option.iconName, option.id)}
              key={option.id}
              startIcon={
                <Icon
                  as={option?.iconType}
                  color='#ccc'
                  mr='1'
                  size='6'
                  name={option?.iconName}
                />
              }>
              <Text color='#fff' fontSize='16'>
                {option?.title}
              </Text>
            </Actionsheet.Item>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
      <Popup
        onClose={() => setModalVisible(false)}
        modalVisible={modalVisible}
      />
    </>
  );
}
