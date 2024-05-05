import React from 'react';
import { ChangePasswordComponent } from '../../../components/AppComponents/UserAdminComponents/ChangePasswordComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type ChangePasswordProp = StackNavigationProp<{ChangePassword : undefined }>;

const ChangePasswordScreen = ({ navigation }: { navigation: ChangePasswordProp }) => {
  return <ChangePasswordComponent navigation={navigation} />;
};

export default ChangePasswordScreen;
