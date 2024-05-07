import React from 'react';
import { ChangePasswordComponent } from '../../../components/AppComponents/UserAdminComponents/ChangePasswordComponent';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Password: undefined;
};

type ChangePasswordScreenProp = StackNavigationProp<RootStackParamList, 'Password'>;
type ChangePasswordRoute = RouteProp<RootStackParamList, 'Password'>;

const ChangePasswordScreen = ({ navigation, route }: { navigation: ChangePasswordScreenProp, route: ChangePasswordRoute }) => {
  return <ChangePasswordComponent navigation={navigation} route={route} />;
};

export default ChangePasswordScreen;
