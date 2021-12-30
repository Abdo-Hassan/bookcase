import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Auth from '../../components/authComponents/Auth';

export default function Login() {
  return (
    <>
      <StatusBar style='light' />
      <Auth register={false} />
    </>
  );
}
