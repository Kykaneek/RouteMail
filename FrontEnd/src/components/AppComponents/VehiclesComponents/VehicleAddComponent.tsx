import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createVehicle } from '../../../services/AppServices/vehiclesServices';


export const VehicleAdd = ({ navigation}: { navigation: any}) => {
  const [VehicleData, setVehicleData] = useState<any>({
    Name: '',
    Model: '',
  });

  useEffect(() => {
      setVehicleData(VehicleData);
  });

  const GoBack = () => {
    navigation.navigate('VehicleViewScreen');
  };


  const create_Vehicle = async () => {
    try {
      const success = await createVehicle(VehicleData);
      if (success) {
        Alert.alert('Pojazd został dodany!');
        navigation.navigate('VehicleViewScreen');
      }
    } catch (error) {
      Alert.alert('Wystąpił błąd podczas tworzenia pojazdu');
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setVehicleData({ ...VehicleData, [key]: value });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Marka:</Text>
          <TextInput
            style={styles.inputControl}
            onChangeText={(text) => handleInputChange('Name', text)}
            placeholder="Wprowadź markę"
          />
          
            
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Model:</Text>
          <TextInput
            style={styles.inputControl}
            onChangeText={(text) => handleInputChange('Model', text)}
            placeholder="Wprowadź model"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={create_Vehicle}>
            <Text style={styles.buttonText}>Utwórz</Text>
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
