import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createUserAction } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../../components/Auth';

export default function Register() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const createUser = () => {
    if (email && password) {
      dispatch(createUserAction(email, password));
      if (currentUser) {
        navigation.navigate('home');
      }
    }
  };

  return (
    <>
      <StatusBar style='light' />
      <Auth register={true} createUser={createUser} />
    </>
  );
}
