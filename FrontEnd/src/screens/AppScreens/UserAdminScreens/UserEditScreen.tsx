import React from 'react';
import { UserEditComponent } from '../../../components/AppComponents/UserAdminComponents/UserEditComponent';

import { StackNavigationProp } from '@react-navigation/stack';


type UserEditScreenProp = StackNavigationProp<{UserEditScreen : undefined }>;

const UserEditScreen = ({ navigation }: { navigation: UserEditScreenProp }) => {
  return <UserEditComponent navigation={navigation} />;
};

export default UserEditScreen;
