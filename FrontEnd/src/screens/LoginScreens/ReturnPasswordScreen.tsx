import React from 'react';
import ConfirmPassword from '../../components/AppComponents/LoginComponents/ReturnPassword/ConfirmPasswordCodeComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type ConfirmAccountNavigationProp = StackNavigationProp<{ ConfirmAccount: undefined }>;

const ConfirmReturnPassword = ({ navigation }: { navigation: ConfirmAccountNavigationProp }) => {
  return <ConfirmPassword navigation={navigation} />;
};

export default ConfirmReturnPassword;
