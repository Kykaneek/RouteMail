import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

export const VillagePropiertieAdresView = ({ navigation }: { navigation: any }) => {
  const [coordinates, setCoordinates] = useState('');
  
  // Funkcja fetchCoordinates pobiera dane o koordynatach związanych z danym adresem z serwera
  const fetchCoordinates = async () => {
    try {
      // Pobieranie danych z serwera na podstawie wybranego adresu
      const data = await fetchCoordinatesFromServer(selectedAddress);
      // Ustawienie danych koordynatów w stanie
      setCoordinates(data);
    } catch (error) {
      console.error('Błąd podczas pobierania danych koordynatów:', error);
    }
  };

  // Pobranie danych koordynatów po zamontowaniu komponentu
  useEffect(() => {
    fetchCoordinates();
  }, []);

  const handleDeleteAddress = () => {
    // Obsługa usuwania adresu
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{selectedAddress}</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.coordinatesText}>{coordinates}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAddress}>
          <Text style={styles.deleteButtonText}>Usuń</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => handleBack()}>
          <Text style={styles.bottomButtonText}>Powrót</Text>
        </TouchableOpacity>
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
  addressContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  coordinatesText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
