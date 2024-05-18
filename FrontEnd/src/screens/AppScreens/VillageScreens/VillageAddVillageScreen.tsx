import React from 'react';
import { VillageAddVillageView } from '../../../components/VillageComponents/VillageAddVillageView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillageAddVillageScreenProp = StackNavigationProp<{ VillageAV: undefined }>;

const VillageAddVillageScreen = ({ navigation }: { navigation: VillageAddVillageScreenProp  }) => {
  return < VillageAddVillageView navigation={navigation} />;
};

export default VillageAddVillageScreen ;