import React from 'react';
import { VillageMainView } from '../../../components/AppComponents/VillageComponents/VillageMainView';
import { StackNavigationProp } from '@react-navigation/stack';


type VillageMainScreenProp = StackNavigationProp<{ VillageM: undefined }>;

const VillageMainScreen = ({ navigation }: { navigation: VillageMainScreenProp  }) => {
  return < VillageMainView  navigation={navigation} />;
};

export default VillageMainScreen ;