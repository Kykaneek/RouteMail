import React from 'react';
import { UserAddComponent } from '../../../components/AppComponents/UserAdminComponents/UserAddComponent';

import { StackNavigationProp } from '@react-navigation/stack';


type UserAddScreenProp = StackNavigationProp<{UserAddScreen : undefined }>;

const UserAddScreen = ({ navigation }: { navigation: UserAddScreenProp }) => {
  return <UserAddComponent navigation={navigation} />;
};

export default UserAddScreen;
