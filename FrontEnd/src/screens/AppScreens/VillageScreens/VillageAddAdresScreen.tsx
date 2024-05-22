import React from 'react';
import { VillageAddAdresView } from '../../../components/AppComponents/VillageComponents/VillageAddAdresView';
import { StackNavigationProp } from '@react-navigation/stack';
 
 
type VillageAddAdresScreenProp = StackNavigationProp<{ VillageAA: undefined }>;
 
const VillageAddAdresScreen = ({ navigation, route }: { navigation: VillageAddAdresScreenProp, route: VillageAddAdresScreenProp  }) => {
  return < VillageAddAdresView  navigation={navigation} route={route} />;
};
 
export default VillageAddAdresScreen ;