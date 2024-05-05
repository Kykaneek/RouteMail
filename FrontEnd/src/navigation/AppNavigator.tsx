import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserViewScreen from '../screens/AppScreens/UserViewScreen';
import MainOrderScreen from '../screens/AppScreens/OrderScreens/OrderMainViewScreen';
import MainOrderItemScreen from '../screens/AppScreens/OrderScreens/OrderItemScreen/OrderItemViewScreen';
import OrderItemScreen from '../screens/AppScreens/OrderScreens/OrderItemScreen/OrderItemViewScreen';
import OrderMapScreen from '../screens/AppScreens/OrderScreens/OrderMapViewScreen';
import CreateOrderScreen from '../screens/AppScreens/OrderScreens/CreateOrderScreen';
import VehicleViewScreen from '../screens/AppScreens/VehicleScreens/VehicleMainScreen';
import VehiclePropiertisViewScreen from '../screens/AppScreens/VehicleScreens/VehiclePropiertieScreen';
import VehicleEditViewScreen from '../screens/AppScreens/VehicleScreens/VehicleEditScreen';

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
      <Stack.Screen options={{ headerShown: false,}} name="VehicleViewScreen" component={VehicleViewScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VehiclePropiertisViewScreen" component={VehiclePropiertisViewScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VehicleEditViewScreen" component={VehicleEditViewScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
