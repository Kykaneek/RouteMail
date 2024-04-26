import React from 'react';
import HomeScreenComponent from '../components/HomeScren';
import { StackNavigationProp } from '@react-navigation/stack';


type HomeScreenNavigationProp = StackNavigationProp<{ Screen2: undefined }>;

const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return <HomeScreenComponent navigation={navigation} />;
};

export default HomeScreen;
