import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Auth from '../../components/Auth';

export default function Register() {
  return (
    <>
      <StatusBar style='light' />
      <Auth register={true} />
    </>
  );
}
