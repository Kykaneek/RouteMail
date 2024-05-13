import React from 'react';
import { VehiclePropiertisViewComponent } from '../../../components/VehiclesComponents/VehiclePropiertieComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehiclePropiertisScreenProp = StackNavigationProp<{ VehicleP: undefined }>;

const VehiclePropiertisViewScreen = ({ navigation }: { navigation: VehiclePropiertisScreenProp  }) => {
  return < VehiclePropiertisViewComponent  navigation={navigation} />;
};

export default VehiclePropiertisViewScreen ;
