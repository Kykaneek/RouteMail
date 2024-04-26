import React from 'react';
import { OrderItemComponent } from '../../../../components/AppComponents/OrderComponents/OrdersItem/OrderItemViewComponent';
import { StackNavigationProp } from '@react-navigation/stack';


type OrderItemScreenNavigationProp = StackNavigationProp<{ Item: undefined }>;

const OrderItemScreen = ({ navigation }: { navigation: OrderItemScreenNavigationProp }) => {
  return <OrderItemComponent navigation={navigation} />;
};

export default OrderItemScreen;
