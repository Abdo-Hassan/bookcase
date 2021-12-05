import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createUserAction } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../../components/Auth';

export default function Login() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const loginUser = () => {
    console.log('login');
  };

  return (
    <>
      <StatusBar style='light' />
      <Auth register={false} createUser={loginUser} />
    </>
  );
}
