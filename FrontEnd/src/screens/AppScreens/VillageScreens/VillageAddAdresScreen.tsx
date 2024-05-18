import React from 'react';
import { VillageAddAdresView } from '../../../components/AppComponents/VillageComponents/VillageAddAdresView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillageAddAdresScreenProp = StackNavigationProp<{ VillageAA: undefined }>;

const VillageAddAdresScreen = ({ navigation }: { navigation: VillageAddAdresScreenProp  }) => {
  return < VillageAddAdresView  navigation={navigation} />;
};

export default VillageAddAdresScreen ;