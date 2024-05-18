import React from 'react';
import { ChooseVehicleComponent } from '../../../components/AppComponents/VehiclesComponents/ChooseVehicleComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type ChooseVehicleScreenProp = StackNavigationProp<{ CVehicle: undefined }>;

const ChooseVehicleScreen = ({ navigation }: { navigation: ChooseVehicleScreenProp  }) => {
  return < ChooseVehicleComponent  navigation={navigation} />;
};

export default ChooseVehicleScreen ;
