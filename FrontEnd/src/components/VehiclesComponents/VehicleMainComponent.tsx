import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export const VehicleView = ({ navigation }: { navigation: any }) => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const GoBack = () => {
    navigation.navigate('UserViewScreen')
  }
  // Pobieranie danych pojazdów z serwera
  const fetchVehicles = async () => {
    try {
      // Pobieranie danych z serwera
      const data = await fetchDataFromServer();
      // Ustawienie danych pojazdów w stanie
      setVehicles(data);
    } catch (error) {
      console.error('Błąd podczas pobierania danych pojazdów:', error);
    }
  };

  // Pobranie danych pojazdów z serwera po zamontowaniu komponentu
  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleAddVehicle = () => {
    // Obsługa dodawania nowego pojazdu
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Pojazd</Text>
        <ScrollView contentContainerStyle={styles.vehicleButtonsContainer}>
          {vehicles.map((vehicle, index) => (
            <TouchableOpacity
              key={index}
              style={styles.vehicleButton}
              onPress={() => handleVehicleSelect(vehicle)}
            >
              <Text style={styles.vehicleButtonText}>{vehicle.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.bottomButton} onPress={handleAddVehicle}>
            <Text style={styles.bottomButtonText}>Dodaj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={GoBack}>
            <Text style={styles.bottomButtonText}>Powrót</Text>
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
  vehicleButtonsContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  vehicleButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  vehicleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  bottomButton: {
    backgroundColor: '#075eec',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
