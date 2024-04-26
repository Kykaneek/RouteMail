import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreenComponent = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Zalogowano!</Text>
      <Button
        title="Do usera"
        onPress={() => navigation.navigate('UserViewScreen')}
      />
    </View>
  );
};

export default HomeScreenComponent;
