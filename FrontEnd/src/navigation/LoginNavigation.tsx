import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScren';
import LoginScreen from '../screens/LoginScreen';
import ConfirmAccountCodeScreen from '../screens/LoginScreens/ConfirmAccountCodeScreen';
import ConfirmAccountScreen from '../screens/LoginScreens/ConfirmAccountScreen';
import ConfirmReturnCode from '../screens/LoginScreens/ConfirmReturnCodeScreen';
import ConfirmReturnPassword from '../screens/LoginScreens/ReturnPasswordScreen';


const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (

      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen options={{ headerShown: false,}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false,}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false,}} name="ConfirmCodeAccount" component={ConfirmAccountCodeScreen} />
        <Stack.Screen options={{ headerShown: false,}} name="ConfirmAccount" component={ConfirmAccountScreen} />
        <Stack.Screen options={{ headerShown: false,}} name="ConfirmReturnCode" component={ConfirmReturnCode} />
        <Stack.Screen options={{ headerShown: false,}} name="ConfirmReturnPassword" component={ConfirmReturnPassword} />
      </Stack.Navigator>

  );
};

export default LoginNavigator;
