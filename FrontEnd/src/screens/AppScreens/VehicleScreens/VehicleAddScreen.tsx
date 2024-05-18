import React from 'react';
import { VehicleAdd } from '../../../components/AppComponents/VehiclesComponents/VehicleAddComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehicleAddScreenProp = StackNavigationProp<{ VehicleA: undefined }>;

const VehicleAddViewScreen = ({ navigation }: { navigation: VehicleAddScreenProp  }) => {
  return < VehicleAdd navigation={navigation} />;
};

export default VehicleAddViewScreen ;