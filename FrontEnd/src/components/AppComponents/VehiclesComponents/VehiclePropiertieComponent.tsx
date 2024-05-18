import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';



export const VehiclePropiertisViewComponent = ({ navigation }: { navigation: any}) => {
 
  const GoBack = () => {
    navigation.navigate('VehicleViewScreen');
  };

  const GoToEdition = () => {
    navigation.navigate('VehicleEditViewScreen');
  };






  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Wybrany pojazd</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Marka:</Text>
            <Text style={styles.detailValue}>X</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Model:</Text>
            <Text style={styles.detailValue}>Y</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={GoBack} >
            <Text style={styles.buttonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={GoToEdition}>
            <Text style={styles.buttonText}>Edytuj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Usuń</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailValue: {
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#075eec',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginLeft: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

