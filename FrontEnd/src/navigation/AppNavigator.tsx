import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserViewScreen from '../screens/AppScreens/UserViewScreen';
import MainOrderScreen from '../screens/AppScreens/OrderScreens/OrderMainViewScreen';
import MainOrderItemScreen from '../screens/AppScreens/OrderScreens/OrderItemScreen/OrderItemViewScreen';
import OrderItemScreen from '../screens/AppScreens/OrderScreens/OrderItemScreen/OrderItemViewScreen';
import OrderMapScreen from '../screens/AppScreens/OrderScreens/OrderMapViewScreen';
import CreateOrderScreen from '../screens/AppScreens/OrderScreens/CreateOrderScreen';

const Stack = createStackNavigator();


const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false,}} name="UserViewScreen" component={UserViewScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="MainOrderScreen" component={MainOrderScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="MainOrderItemScreen" component={MainOrderItemScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="OrderItemScreen" component={OrderItemScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="OrderMapScreen" component={OrderMapScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="CreateOrderScreen" component={CreateOrderScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
