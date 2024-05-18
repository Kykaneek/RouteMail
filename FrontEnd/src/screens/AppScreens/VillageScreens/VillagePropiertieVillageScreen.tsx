import React from 'react';
import { VillagePropiertieVillageView } from '../../../components/AppComponents/VillageComponents/VillagePropiertieVillageView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillagePropiertieVillageScreenProp = StackNavigationProp<{ VillagePV: undefined }>;

const VillagePropiertieVillageScreen = ({ navigation, route }: { navigation: VillagePropiertieVillageScreenProp, route: VillagePropiertieVillageScreenProp}) => {
  return < VillagePropiertieVillageView  navigation={navigation} route={route} />;
};

export default VillagePropiertieVillageScreen ;