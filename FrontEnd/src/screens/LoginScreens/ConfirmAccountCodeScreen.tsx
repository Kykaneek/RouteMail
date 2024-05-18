import React from 'react';
import ConfirmAccountCodeComponent from '../../components/AppComponents/LoginComponents/ConfirmAccount/ConfirmAccountComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type ConfirmAccountCodeNavigationProp = StackNavigationProp<{ ConfirmAccount: undefined }>;

const ConfirmAccountCodeScreen = ({ navigation }: { navigation: ConfirmAccountCodeNavigationProp }) => {
  return <ConfirmAccountCodeComponent navigation={navigation} />;
};

export default ConfirmAccountCodeScreen;
