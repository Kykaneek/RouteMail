import React from 'react';
import { UserMainListComponent } from '../../../components/AppComponents/UserAdminComponents/UserMainListComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type UserMainListProp = StackNavigationProp<{UserMainList : undefined }>;

const UserMainListScreen = ({ navigation }: { navigation: UserMainListProp }) => {
  return <UserMainListComponent navigation={navigation} />;
};

export default UserMainListScreen;
