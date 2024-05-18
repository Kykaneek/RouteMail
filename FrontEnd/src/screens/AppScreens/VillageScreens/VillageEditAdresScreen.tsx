import React from 'react';
import { VillageEditAdresView } from '../../../components/VillageComponents/VillageEditAdresView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillageEditAdresScreenProp = StackNavigationProp<{ VillageEA: undefined }>;

const VillageEditAdresScreen = ({ navigation, route }: { navigation: VillageEditAdresScreenProp, route: VillageEditAdresScreenProp}) => {
  return < VillageEditAdresView navigation={navigation} route={route} />;
};

export default VillageEditAdresScreen ;