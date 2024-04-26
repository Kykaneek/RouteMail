import React from 'react';
import { CreateOrderComponent } from '../../../components/AppComponents/OrderComponents/CreateOrderViewComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type CreateOrderScreenScreenNavigationProp = StackNavigationProp<{ CreateOrder: undefined }>;

const CreateOrderScreen = ({ navigation }: { navigation: CreateOrderScreenScreenNavigationProp }) => {
  return <CreateOrderComponent navigation={navigation} />;
};

export default CreateOrderScreen;
``