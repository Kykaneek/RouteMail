import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export const VillagePropiertieVillageView = ({ navigation }: { navigation: any }) => {
  const [addresses, setAddresses] = useState([]);
  
  // Funkcja fetchAddresses pobiera dane o adresach związanych z daną miejscowością z serwera
  const fetchAddresses = async () => {
    try {
      // Pobieranie danych z serwera na podstawie wybranej miejscowości
      const data = await fetchAddressesFromServer(selectedLocation);
      // Ustawienie danych adresów w stanie
      setAddresses(data);
    } catch (error) {
      console.error('Błąd podczas pobierania danych adresów:', error);
    }
  };

  // Pobranie danych adresów po zamontowaniu komponentu
  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleBack = () => {
    // Obsługa powrotu do poprzedniego ekranu
  };

  const handleAddAddress = () => {
    // Obsługa dodawania nowego adresu
  };

  const handleDeleteAddress = (addressId) => {
    // Obsługa usuwania adresu
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{selectedLocation}</Text>
        <ScrollView contentContainerStyle={styles.addressesContainer}>
          {addresses.map((address, index) => (
            <View key={index} style={styles.addressCard}>
              <Text style={styles.addressText}>{address}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteAddress(address.id)}>
                <Text style={styles.deleteButtonText}>Usuń</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.bottomButtonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
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
  addressesContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  addressCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addressText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '30%',
    marginTop: -30,
  },
  addButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '30%',
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
