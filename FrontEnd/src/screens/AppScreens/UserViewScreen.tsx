import React from 'react';
import { UserViewComponent } from '../../components/AppComponents/UserViewComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type UserScreenNavigationProp = StackNavigationProp<{ User: undefined }>;

const UserViewScreen = ({ navigation }: { navigation: UserScreenNavigationProp }) => {
  return < UserViewComponent navigation={navigation} />;
};

export default UserViewScreen;
