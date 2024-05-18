import React from 'react';
import { VehicleView } from '../../../components/AppComponents/VehiclesComponents/VehicleMainComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehicleMainScreenProp = StackNavigationProp<{ VehicleM: undefined }>;

const VehicleViewScreen = ({ navigation }: { navigation: VehicleMainScreenProp  }) => {
  return < VehicleView  navigation={navigation} />;
};

export default VehicleViewScreen ;
