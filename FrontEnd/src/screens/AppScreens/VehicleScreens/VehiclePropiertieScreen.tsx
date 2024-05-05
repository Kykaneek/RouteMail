import React from 'react';
import { VehiclePropiertis } from '../../../components/VehiclesComponents/VehiclePropiertieComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehiclePropiertisScreenProp = StackNavigationProp<{ VehicleP: undefined }>;

const VehiclePropiertisViewScreen = ({ navigation }: { navigation: VehiclePropiertisScreenProp  }) => {
  return < VehiclePropiertis  navigation={navigation} />;
};

export default VehiclePropiertisViewScreen ;
