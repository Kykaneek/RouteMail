import React from 'react';
import { UserPropertiesComponent } from '../../../components/AppComponents/UserAdminComponents/UserPropertiesComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type UserPropertiesProp = StackNavigationProp<{UserProperties : undefined }>;

const UserPropertiesScreen = ({ navigation }: { navigation: UserPropertiesProp }) => {
  return <UserPropertiesComponent navigation={navigation} />;
};

export default UserPropertiesScreen;
