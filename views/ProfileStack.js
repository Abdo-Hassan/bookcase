import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { customColor } from '../constants/Colors';
import Profile from '../screens/profile/Profile';
import ProfileEdit from '../screens/profile/ProfileEdit';
import AccountSettings from '../components/authComponents/AccountSettings';
import { EvilIcons } from '@expo/vector-icons';
import { useDisclose } from 'native-base';
import ActionSheetDetails from '../components/ActionSheetDetails';
import UserSettings from '../screens/profile/UserSettings';

const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {
  const { isOpen, onClose, onOpen } = useDisclose();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: customColor,
        },
      }}
    >
      <Stack.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerRight: () => {
            return (
              <>
                <EvilIcons
                  name='gear'
                  size={30}
                  color='#fff'
                  style={{ marginRight: 15 }}
                  onPress={onOpen}
                />
                <ActionSheetDetails
                  isOpen={isOpen}
                  onClose={onClose}
                  profile={true}
                  navigation={navigation}
                />
              </>
            );
          },
        }}
        component={Profile}
      />
      <Stack.Screen
        name='profileEdit'
        options={{
          title: 'Edit Profile',
        }}
        component={ProfileEdit}
      />

      <Stack.Screen
        name='accountSettings'
        options={{
          title: 'Account Settings',
        }}
        component={AccountSettings}
      />

      <Stack.Screen
        name='userSettings'
        options={{
          title: 'App Settings',
        }}
        component={UserSettings}
      />
    </Stack.Navigator>
  );
}
