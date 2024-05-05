import React from 'react';
import { VehicleEdit } from '../../../components/VehiclesComponents/VehicleEditComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehicleEditScreenProp = StackNavigationProp<{ VehicleE: undefined }>;

const VehicleEditViewScreen = ({ navigation }: { navigation: VehicleEditScreenProp  }) => {
  return < VehicleEdit navigation={navigation} />;
};

export default VehicleEditViewScreen ;