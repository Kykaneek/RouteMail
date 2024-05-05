import React from 'react';
import { UserMainListComponent } from '../../../components/AppComponents/UserAdminComponents/UserMainListComponent';
import { StackNavigationProp } from '@react-navigation/stack';

type UserMainListScreenProps = {
  navigation: StackNavigationProp<any, any>; // Ustaw ten typ zgodnie z twoimi potrzebami
};

const UserMainListScreen = ({ navigation }: UserMainListScreenProps) => {
  return <UserMainListComponent navigation={navigation} />;
};

export default UserMainListScreen;
