import React from 'react';
import { VillagePropiertieVillageView } from '../../../components/VillageComponents/VillagePropiertieVillageView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillagePropiertieVillageScreenProp = StackNavigationProp<{ VillagePV: undefined }>;

const VillagePropiertieVillageScreen = ({ navigation }: { navigation: VillagePropiertieVillageScreenProp  }) => {
  return < VillagePropiertieVillageView  navigation={navigation} />;
};

export default VillagePropiertieVillageScreen ;