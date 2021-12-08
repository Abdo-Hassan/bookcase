import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Guest from './screens/auth/Guest';
import BottomNavigation from './views/BottomNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from './screens/reviews/ReviewDetails';
import { secondaryColor, customColor } from './constants/Colors';
import CommentSection from './screens/reviews/CommentSection';
import Loading from './components/Loading';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { getUser } from './redux/actions/authActions';

const Stack = createStackNavigator();

// set default color mode
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
  'Setting a timer for a long period of time',
]);

const configGradient = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

// for using redux store app must wraps whole app
export default App = () => {
  return (
    <Provider store={store}>
      <AppDetails />
    </Provider>
  );
};

function AppDetails() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  dispatch(getUser());
  const currentUser = useSelector((state) => state.currentUser);
  const fetchCurrentUser = useSelector((state) => state.fetchCurrentUser);

  useEffect(() => {
    if (fetchCurrentUser) {
      setLoading(false);
    }
  }, [fetchCurrentUser]);

  const handleScreens = () => {
    if (!loading) {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!currentUser ? (
            <Stack.Screen name='guest' component={Guest} />
          ) : (
            <>
              <Stack.Screen name='home' component={BottomNavigation} />
            </>
          )}
        </Stack.Navigator>
      );
    } else {
      return <Loading />;
    }
  };

  return (
    <NavigationContainer>
      <NativeBaseProvider config={configGradient} theme={customTheme}>
        <StatusBar style='light' />
        {handleScreens()}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
