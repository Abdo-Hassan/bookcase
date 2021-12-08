import { store } from '../redux/store';
const appTheme = store.getState()?.userSettings?.theme;
console.log('appTheme', appTheme);

export const primaryColor = appTheme ? appTheme : '#E8592A';
export const secondaryColor = appTheme ? appTheme : '#D06224';
export const customColor = appTheme ? appTheme : '#49081E';

export const customPrimaryColor = '#6D334B';
export const customSecondaryColor = '#F9E0DB';
export const textColor = '#FF5403';
