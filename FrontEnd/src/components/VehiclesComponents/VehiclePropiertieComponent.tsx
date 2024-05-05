import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

export const VehiclePropiertis = ({ navigation, selectedVehicle }: { navigation: any, selectedVehicle: string }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const fetchVehiclePropiertisFromServer = async (vehicleId: string) => {
    // Przykładowe zapytanie do serwera pobierające szczegóły pojazdu na podstawie jego identyfikatora
    try {
      const response = await fetch(`https://example.com/api/vehicles/${vehicleId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Błąd podczas pobierania danych pojazdu z serwera');
    }
  };


  // Pobieranie danych pojazdów z serwera
  const fetchVehicleDetails = async () => {
    try {
      // Pobieranie danych szczegółowych z serwera na podstawie wybranego pojazdu
      const data = await fetchVehiclePropiertisFromServer(selectedVehicle);
      // Ustawienie danych szczegółowych pojazdu w stanach
      setBrand(data.brand);
      setModel(data.model);
    } catch (error) {
      console.error('Błąd podczas pobierania danych pojazdu:', error);
    }
  };

  // Pobranie danych pojazdu z serwera po zamontowaniu komponentu
  useEffect(() => {
    fetchVehicleDetails();
  }, []);

  const handleEdit = () => {
    // Obsługa edycji pojazdu
  };

  const handleDelete = () => {
    // Obsługa usuwania pojazdu
  };

  const onClose = () => {
    // Obsługa zamknięcia widoku
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{selectedVehicle}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Marka:</Text>
            <Text style={styles.detailValue}>{brand}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Model:</Text>
            <Text style={styles.detailValue}>{model}</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edytuj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

