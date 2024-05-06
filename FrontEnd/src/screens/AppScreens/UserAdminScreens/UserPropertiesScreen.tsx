import React from 'react';
import UserPropertiesComponent from '../../../components/AppComponents/UserAdminComponents/UserPropertiesComponent';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type UserPropertiesProp = StackNavigationProp<{UserProperties : undefined }>;
type UserPropertiesRoute = RouteProp<{UserProperties : undefined }, 'UserProperties'>;

const UserPropertiesScreen = ({ navigation, route }: { navigation: UserPropertiesProp, route: UserPropertiesRoute }) => {
  return <UserPropertiesComponent navigation={navigation} route={route} />;
};

export default UserPropertiesScreen;
