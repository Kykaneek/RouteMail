import React from 'react';
import { VehicleEdit } from '../../../components/VehiclesComponents/VehicleEditComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehicleEditScreenProp = StackNavigationProp<{ VehicleE: undefined }>;

const VehicleEditViewScreen = ({ navigation, route }: { navigation: VehicleEditScreenProp, route: VehicleEditScreenProp}) => {
  return < VehicleEdit navigation={navigation} route={route} />;
};

export default VehicleEditViewScreen ;