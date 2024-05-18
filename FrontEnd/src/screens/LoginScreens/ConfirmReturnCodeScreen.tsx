import React from 'react';
import ConfirmPasswordCode from '../../components/AppComponents/LoginComponents/ReturnPassword/ConfirmPassword';
import { StackNavigationProp } from '@react-navigation/stack';


type ConfirmAccountNavigationProp = StackNavigationProp<{ ConfirmAccount: undefined }>;

const ConfirmReturnCode = ({ navigation }: { navigation: ConfirmAccountNavigationProp }) => {
  return <ConfirmPasswordCode navigation={navigation} />;
};

export default ConfirmReturnCode;
