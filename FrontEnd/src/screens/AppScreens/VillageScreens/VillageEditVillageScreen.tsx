import React from 'react';
import { VillageEditVillageView } from '../../../components/VillageComponents/VillageEditVillageView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillageEditVillageScreenProp = StackNavigationProp<{ VillageEV: undefined }>;

const VillageEditVillageScreen = ({ navigation }: { navigation: VillageEditVillageScreenProp  }) => {
  return < VillageEditVillageView  navigation={navigation} />;
};

export default VillageEditVillageScreen ;