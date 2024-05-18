import React from 'react';
import { VillageEditVillageView } from '../../../components/VillageComponents/VillageEditVillageView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillageEditVillageScreenProp = StackNavigationProp<{ VillageEV: undefined }>;

const VillageEditVillageScreen = ({ navigation, route }: { navigation: VillageEditVillageScreenProp, route: VillageEditVillageScreenProp}) => {
  return < VillageEditVillageView navigation={navigation} route={route} />;
};

export default VillageEditVillageScreen ;