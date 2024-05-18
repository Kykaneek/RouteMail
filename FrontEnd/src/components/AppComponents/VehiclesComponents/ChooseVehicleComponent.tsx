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

export const ChooseVehicleComponent = ({ navigation }: { navigation: any }) => {
  const [vechicles, setVehicles] = useState<any[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [userId, setUserId] = useState(123); // Id aktualnego użytkownika, do zmiany

  useEffect(() => {
    fetchVehicles();
  }, []);

  const GoBack = () => {
    navigation.navigate('UserViewScreen');
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

/** 
  useEffect(() => {
    fetch('http://192.168.1.11:8088/vehicles')
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Błąd:', error));
  }, []);

  const handleSelectVehicle = (vechicles) => {
    if (vechicles.inUse !== null) {
      Alert.alert('Pojazd jest zajęty', 'Wybierz inny pojazd.');
    } else if (selectedVehicle && selectedVehicle.id !== vechicles.id) {
      Alert.alert('Jesteś już przypisany do innego pojazdu', 'Zwolnij aktualny pojazd przed wyborem nowego.');
    } else {
      Alert.alert(
        'Czy na pewno chcesz przypisać pojazd do siebie?',
        '',
        [
          {
            text: 'Nie',
            onPress: () => console.log('Anulowano przypisanie pojazdu'),
            style: 'cancel',
          },
          {
            text: 'Tak',
            onPress: () => {
              fetch(`http://192.168.1.11:8088/vehicles/${vechicle.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inUse: userId }),
              })
                .then(response => response.json())
                .then(() => {
                  setSelectedVehicle(vechicle);
                  setVehicles(prevVehicles =>
                    prevVehicles.map(v =>
                      v.id === vechicle.id ? { ...v, inUse: userId } : v
                    )
                  );
                })
                .catch(error => console.error('Błąd:', error));
            },
          },
        ]
      );
    }
  };
  /**
  const handleReleaseVehicle = () => {
    Alert.alert(
      'Czy na pewno chcesz zwolnić pojazd?',
      '',
      [
        {
          text: 'Nie',
          onPress: () => console.log('Anulowano zwolnienie pojazdu'),
          style: 'cancel',
        },
        {
          text: 'Tak',
          onPress: () => {
            fetch(`http://192.168.1.11:8088/vehicles/${selectedVehicle.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ inUse: null }),
            })
              .then(response => response.json())
              .then(() => {
                setSelectedVehicle(null);
                setVehicles(prevVehicles =>
                  prevVehicles.map(v =>
                    v.id === selectedVehicle.id ? { ...v, inUse: null } : v
                  )
                );
              })
              .catch(error => console.error('Błąd:', error));
          },
        },
      ]
    );
  };
**/
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.topButtonText} onPress={GoBack}>Powrót</Text>
          </TouchableOpacity>
          </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {vechicles.map(vehicle => (
          <TouchableOpacity
            key={vehicle.id}
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
            {vehicle.inUse !== null ? (
              <View style={styles.courierInfo}>
                <TouchableOpacity >
                  <Text style={styles.releaseBtn}>Zwolnij pojazd</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.selectBtn}>Zajmij pojazd</Text>
            )}
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
