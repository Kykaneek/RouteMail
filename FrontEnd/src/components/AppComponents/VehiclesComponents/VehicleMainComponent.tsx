import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export const VehicleView = ({ navigation }: { navigation: any }) => {
  const [vechicles, setVehicles] = useState<any[]>([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const GoBack = () => {
    navigation.navigate('UserViewScreen');
  };

  const ViewProperties = () => {
    navigation.navigate('VehiclePropiertisViewScreen');
  };
  

  const fetchVehicles = () => {
    // Pobranie danych użytkowników z backendu
    fetch('http://192.168.1.11:8800/vechicles')
      .then(response => response.json())
      .then(data => {
        setVehicles(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };


  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.topButtonText} onPress={GoBack}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.topButtonText}>Dodaj</Text>
          </TouchableOpacity>
          </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {vechicles.map(vehicle => (
          <TouchableOpacity
            key={vehicle.id}
            onPress={ViewProperties}
            style={[styles.vehicleBlock]}
           >
            <View>
              <Text style={styles.vehicleBrand}>{vehicle.Name}</Text>
              <Text style={styles.vehicleModel}>{vehicle.Model}</Text>
              {vehicle.inUse !== null && (
                <View style={styles.courierInfo}>
                  <Text>Kurier: {vehicle.courierNumber}</Text>
                  <Text>{vehicle.courierFirstName} {vehicle.courierLastName}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  topButton: {
    backgroundColor: '#075eec',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  topButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 20,
  },
  vehicleBlock: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  selectedVehicle: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  vehicleBrand: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vehicleModel: {
    fontSize: 16,
    marginBottom: 10,
  },
  courierInfo: {
    marginTop: 10,
  },
  releaseBtn: {
    color: 'red',
    marginTop: 5,
  },
  selectBtn: {
    color: 'blue',
    marginTop: 5,
  },
});
