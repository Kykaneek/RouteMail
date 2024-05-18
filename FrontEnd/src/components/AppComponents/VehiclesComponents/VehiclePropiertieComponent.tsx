import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


export const VehiclePropiertisViewComponent = ({ navigation, route}: { navigation: any, route: any}) => {
  const [VehicleData, setVehicle] = useState<any>({});
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    FetchVehicleData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      FetchVehicleData();
    }, [])
  );
/** 
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Symulacja opóźnienia pobierania danych, można zastąpić rzeczywistym pobieraniem danych
    setTimeout(() => {
      FetchVehicleData();
      setRefreshing(false);
    }, 1000);
  }, []);
*/
  const FetchVehicleData = () => {
    const { VehicleData } = route.params;
    setVehicle(VehicleData);
  };
  

  const GoBack = () => {
    navigation.navigate('VehicleViewScreen');
  };

  const GoToEdition = () => {
    navigation.navigate('VehicleEditViewScreen', { VehicleData: VehicleData });
  };

  const RemoveVehicle = () => {
    Alert.alert(
      'Potwierdź',
      'Czy na pewno chcesz usunąć ten pojazd?',
      [
        {
          text: 'Tak',
          onPress: () => {
            fetch(`http://192.168.1.11:8800/vechicles/${VehicleData.id}`, {
              method: 'DELETE'
            })
            .then(response => {
              if (response.ok) {
                Alert.alert('Pojazd został usunięty!');
                navigation.navigate('VehicleViewScreen');
              } else {
                throw new Error('Błąd podczas usuwania pojazdu');
              }
            })
            .catch(error => {
              console.error(error);
              Alert.alert('Wystąpił błąd podczas usuwania pojazdu');
            });
          },
        },
        {
          text: 'Nie',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Wybrany pojazd</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Marka:</Text>
            <Text style={styles.detailValue}>{VehicleData.Name}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Model:</Text>
            <Text style={styles.detailValue}>{VehicleData.Model}</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={GoBack} >
            <Text style={styles.buttonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={GoToEdition}>
            <Text style={styles.buttonText}>Edytuj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={RemoveVehicle}>
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

