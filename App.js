import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './views/BottomNavigation';
import Loading from './components/Loading';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { getUser } from './redux/actions/authActions';
import GuestStack from './views/GuestStack';

const GOOGLE_BOOKS_API_KEY = 'AIzaSyDv5rFRovPnY0RNlM9CXnxzWMCqkYynlds';

// set default color mode
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
  'Setting a timer for a long period of time',
  'Non-serializable values were found in the navigation state',
  "Can't perform a React state update on",
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
  const currentUser = useSelector((state) => state.auth.currentUser);
  const fetchCurrentUser = useSelector((state) => state.auth.fetchCurrentUser);

  useEffect(() => {
    if (fetchCurrentUser) {
      setLoading(false);
    }
  }, [fetchCurrentUser]);

  const handleScreens = () => {
    if (!loading) {
      return !currentUser ? <GuestStack /> : <BottomNavigation />;
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
