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
import VillageMainScreen from '../screens/AppScreens/VillageScreens/VillageMainScreen';
import VillagePropiertieAdresScreen from '../screens/AppScreens/VillageScreens/VillagePropiertieAdresScreen';
import VillagePropiertieVillageScreen from '../screens/AppScreens/VillageScreens/VillagePropiertieVillageScreen';
import VillageEditVillageScreen from '../screens/AppScreens/VillageScreens/VillageEditVillageScreen';
import VillageEditAdresScreen from '../screens/AppScreens/VillageScreens/VillageEditAdresScreen';

import ChangePasswordScreen from '../screens/AppScreens/UserAdminScreens/ChangePasswordScreen';
import UserEditScreen from '../screens/AppScreens/UserAdminScreens/UserEditScreen';
import UserMainListScreen from '../screens/AppScreens/UserAdminScreens/UserMainListScreen';
import UserPropertiesScreen from '../screens/AppScreens/UserAdminScreens/UserPropertiesScreen';
import UserAddScreen from '../screens/AppScreens/UserAdminScreens/UserAddScreen';
import ChooseVehicleScreen from '../screens/AppScreens/VehicleScreens/ChooseVehicleScreen';
import VehicleAddViewScreen from '../screens/AppScreens/VehicleScreens/VehicleAddScreen';
import VillageAddAdresScreen from '../screens/AppScreens/VillageScreens/VillageAddAdresScreen';
import VillageAddVillageScreen from '../screens/AppScreens/VillageScreens/VillageAddVillageScreen';

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
      <Stack.Screen options={{ headerShown: false,}} name="VillageMainScreen" component={VillageMainScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VillagePropiertieAdresScreen" component={VillagePropiertieAdresScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VillagePropiertieVillageScreen" component={VillagePropiertieVillageScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VillageEditVillageScreen" component={VillageEditVillageScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VillageEditAdresScreen" component={VillageEditAdresScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="UserEditScreen" component={UserEditScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="UserMainListScreen" component={UserMainListScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="UserPropertiesScreen" component={UserPropertiesScreen}/>
      <Stack.Screen options={{ headerShown: false,}} name="UserAddScreen" component={UserAddScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="ChooseVehicleScreen" component={ChooseVehicleScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VehicleAddViewScreen" component={VehicleAddViewScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VillageAddAdresScreen" component={VillageAddAdresScreen} />
      <Stack.Screen options={{ headerShown: false,}} name="VillageAddVillageScreen" component={VillageAddVillageScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
