import React from 'react';
import { VehiclePropiertisViewComponent } from '../../../components/AppComponents/VehiclesComponents/VehiclePropiertieComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type VehiclePropiertisScreenProp = StackNavigationProp<{ VehicleP: undefined }>;

const VehiclePropiertisViewScreen = ({ navigation, route }: { navigation: VehiclePropiertisScreenProp, route: VehiclePropiertisScreenProp}) => {
  return < VehiclePropiertisViewComponent  navigation={navigation} route={route} />;
};

export default VehiclePropiertisViewScreen ;
