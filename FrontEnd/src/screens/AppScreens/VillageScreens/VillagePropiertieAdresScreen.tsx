import React from 'react';
import { VillagePropiertieAdresView } from '../../../components/VillageComponents/VillagePropiertieAdresView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillagePropiertieAdresScreenProp = StackNavigationProp<{ VillagePA: undefined }>;

const VillagePropiertieAdresScreen = ({ navigation }: { navigation: VillagePropiertieAdresScreenProp  }) => {
  return < VillagePropiertieAdresView  navigation={navigation} />;
};

export default VillagePropiertieAdresScreen ;