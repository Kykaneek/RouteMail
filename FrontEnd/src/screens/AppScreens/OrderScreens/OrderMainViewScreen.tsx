import React from 'react';
import { MainOrderComponent } from '../../../components/AppComponents/OrderComponents/OrderMainViewComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type MainOrderScreenNavigationProp = StackNavigationProp<{ Home2: undefined }>;

const MainOrderScreen = ({ navigation }: { navigation: MainOrderScreenNavigationProp }) => {
  return <MainOrderComponent navigation={navigation} />;
};

export default MainOrderScreen;
