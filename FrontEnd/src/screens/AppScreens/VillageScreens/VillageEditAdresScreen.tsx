import React from 'react';
import { VillageEditAdresView } from '../../../components/VillageComponents/VillageEditAdresView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillageEditAdresScreenProp = StackNavigationProp<{ VillageEA: undefined }>;

const VillageEditAdresScreen = ({ navigation }: { navigation: VillageEditAdresScreenProp  }) => {
  return < VillageEditAdresView  navigation={navigation} />;
};

export default VillageEditAdresScreen ;