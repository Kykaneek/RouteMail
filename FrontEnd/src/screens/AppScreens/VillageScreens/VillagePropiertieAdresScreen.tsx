import React from 'react';
import { VillagePropiertieAdresView } from '../../../components/AppComponents/VillageComponents/VillagePropiertieAdresView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillagePropiertieAdresScreenProp = StackNavigationProp<{ VillagePA: undefined }>;

const VillagePropiertieAdresScreen = ({ navigation, route }: { navigation: VillagePropiertieAdresScreenProp, route: VillagePropiertieAdresScreenProp}) => {
  return < VillagePropiertieAdresView  navigation={navigation} route={route} />;
};

export default VillagePropiertieAdresScreen ;