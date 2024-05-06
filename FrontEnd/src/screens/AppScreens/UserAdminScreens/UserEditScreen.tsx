import React from 'react';
import { UserEditComponent } from '../../../components/AppComponents/UserAdminComponents/UserEditComponent';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  UserEdit: undefined;
};

type UserEditScreenProp = StackNavigationProp<RootStackParamList, 'UserEdit'>;
type UserEditRoute = RouteProp<RootStackParamList, 'UserEdit'>;

const UserEditScreen = ({ navigation, route }: { navigation: UserEditScreenProp, route: UserEditRoute }) => {
  return <UserEditComponent navigation={navigation} route={route} />;
};

export default UserEditScreen;
