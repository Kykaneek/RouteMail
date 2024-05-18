import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export const VillageMainView = ({ navigation }: { navigation: any }) => {
  const [locations, setLocations] = useState([]);

  // Funkcja fetchLocations pobiera dane o miejscowościach z serwera
  const fetchLocations = async () => {
    try {
      // Pobieranie danych z serwera
      const data = await fetchLocationsFromServer();
      // Ustawienie danych miejscowości w stanie
      setLocations(data);
    } catch (error) {
      console.error('Błąd podczas pobierania danych miejscowości:', error);
    }
  };

  // Pobranie danych miejscowości z serwera po zamontowaniu komponentu
  useEffect(() => {
    fetchLocations();
  }, []);

  const handleBack = () => {
    // Obsługa powrotu do poprzedniego ekranu
  };

  const handleAddLocation = () => {
    // Obsługa dodawania nowej miejscowości
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Miejscowości</Text>
        <ScrollView contentContainerStyle={styles.locationButtonsContainer}>
          {locations.map((location, index) => (
            <TouchableOpacity
              key={index}
              style={styles.locationButton}
              onPress={() => handleLocationSelect(location)}
            >
              <Text style={styles.locationButtonText}>{location.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.bottomButton} onPress={handleBack}>
            <Text style={styles.bottomButtonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={handleAddLocation}>
            <Text style={styles.bottomButtonText}>Dodaj</Text>
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
  locationButtonsContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  locationButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  locationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bottomButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '45%',
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
