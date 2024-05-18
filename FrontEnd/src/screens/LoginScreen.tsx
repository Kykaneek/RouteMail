import React from 'react';
import LoginComponent from '../components/AppComponents/LoginComponents/LoginComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type LoginScreenProp = StackNavigationProp<{ LoginScreen: undefined }>;

const LoginScreen = ({ navigation }: { navigation: LoginScreenProp} ) => {
  return <LoginComponent navigation={navigation} />;
};

export default LoginScreen;


