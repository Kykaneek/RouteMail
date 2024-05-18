import React from 'react';
import ConfirmAccountComponent from '../../components/AppComponents/LoginComponents/ConfirmAccount/ConfirmCodeComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type ConfirmAccountNavigationProp = StackNavigationProp<{ ConfirmAccount: undefined }>;

const ConfirmAccountScreen = ({ navigation }: { navigation: ConfirmAccountNavigationProp }) => {
  return <ConfirmAccountComponent navigation={navigation} />;
};

export default ConfirmAccountScreen;
