import React from 'react';
import { VehicleView } from '../../../components/VehiclesComponents/VehicleMainComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehicleMainScreenProp = StackNavigationProp<{ Vehicle: undefined }>;

const VehicleViewScreen = ({ navigation }: { navigation: VehicleMainScreenProp  }) => {
  return < VehicleView  navigation={navigation} />;
};

export default VehicleViewScreen ;
