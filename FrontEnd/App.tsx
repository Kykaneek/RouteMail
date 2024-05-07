import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from './src/navigation/AppNavigator';
import LoginNavigator from './src/navigation/LoginNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false,}} name="LoginScreen" component={LoginNavigator} />
        <Stack.Screen options={{ headerShown: false,}} name="UserViewScreen" component={AppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
