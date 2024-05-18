import React, { useState, useEffect, useCallback} from 'react';
import { StyleSheet, SafeAreaView, View, RefreshControl, Text, TextInput, TouchableOpacity, Alert } from 'react-native';


export const VehicleEdit = ({ navigation, route}: { navigation: any, route: any}) => {
  const [VehicleData, setVehicleData] = useState<any>({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    console.log(route.params);
    if (route && route.params) {
      const { VehicleData } = route.params;
      setVehicleData(VehicleData);
    }
  }, [route]);

  const GoBack = () => {
    navigation.navigate('VehiclePropiertisViewScreen');
  };

  const FetchVehicleData = () => {
    const { VehicleData } = route.params;
    setVehicleData(VehicleData);
    
  };

  const updateVehicle = () => {
    fetch(`http://192.168.1.11:8800/vechicles/${VehicleData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(VehicleData)
    })
    .then(response => {
      if (response.ok) {
        Alert.alert('Dane pojazdu zostały zaktualizowane!');
        console.log('Test pomyślnie zdany');
        handleRefresh();
      } else {
        throw new Error('Błąd podczas aktualizacji danych pojazdu');
      }
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Wystąpił błąd podczas aktualizacji danych pojazdu');
    });
  };

  const handleInputChange = (key: string, value: string) => {
    setVehicleData({ ...VehicleData, [key]: value });
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    // Symulacja opóźnienia pobierania danych, można zastąpić rzeczywistym pobieraniem danych
    setTimeout(() => {
      setRefreshing(false); // Zakończ proces odświeżania
      navigation.navigate('VehiclePropiertisViewScreen'); // Nawiguj do ekranu szczegółów użytkownika
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Marka:</Text>
          <TextInput
            style={styles.inputControl}
            placeholder="Wprowadź markę"
            value={VehicleData.Name}
            onChangeText={(text) => handleInputChange('Name', text)}
            
          />
          
            
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Model:</Text>
          <TextInput
            style={styles.inputControl}
            value={VehicleData.Model}
            onChangeText={(text) => handleInputChange('Model', text)}
            placeholder="Wprowadź model"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={updateVehicle} >
            <Text style={styles.buttonText}>Zatwierdź</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={GoBack}>
            <Text style={styles.buttonText}>Rezygnuj</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    marginBottom: 0
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '70%',
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: '#075eec',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputControl: {
    height: 50,
    width: 350,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
});
