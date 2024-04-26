import React from 'react';
import { OrderMapComponent } from '../../../components/AppComponents/OrderComponents/OrderMapViewConponent';
import { StackNavigationProp } from '@react-navigation/stack';


type OrderMapScreenScreenNavigationProp = StackNavigationProp<{ Map: undefined }>;

const OrderMapScreen = ({ navigation }: { navigation: OrderMapScreenScreenNavigationProp }) => {
  return <OrderMapComponent navigation={navigation} />;
};

export default OrderMapScreen;
