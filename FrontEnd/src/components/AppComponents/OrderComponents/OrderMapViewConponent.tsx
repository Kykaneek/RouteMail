import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const OrderMapComponent = ({ navigation }: { navigation: any }) => {
  
  const returntoOrderItem = () => 
    {
      navigation.navigate('OrderItemScreen')
    }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.mapContainer}>
        {/* Tutaj można umieścić komponent mapy GIS */}
        <Text>Mapa zlecenia</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={returntoOrderItem}>
        <Text style={styles.buttonText}>Wróć do szczegółu zlecenia</Text>
      </TouchableOpacity>
    </View>
  )  
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#075eec',
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

