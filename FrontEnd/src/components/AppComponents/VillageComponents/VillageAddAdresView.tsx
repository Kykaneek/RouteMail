import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

export const VillageAddAdresView = ({ navigation, route}: { navigation: any, route: any}) => {
  const [houseNumber, setHouseNumber] = useState('');
  const [villageId, setVillageId] = useState('');

  useEffect(() => {
    console.log(route.params);
    if (route && route.params) {
      const { villageId } = route.params;
      setVillageId(villageId);
    }
  }, [route]);

  const handleConfirm = async () => {
    try {
      const response = await fetch('http://192.168.1.130:8800/adresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          HouseNumber: houseNumber,
          VillageId: villageId
        }),
      });
      if (response.ok) {
        console.log('Adres dodany pomyślnie');
      } else {
        console.error('Dodanie adresu nie powiodło się');
      }
    } catch (error) {
      console.error('Wystąpił błąd w trakcie dodawania adresu:', error);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Adres</Text>
        <TextInput
          style={styles.input}
          value={houseNumber}
          onChangeText={(text) => setHouseNumber(text)}
          placeholder="Numer domu"
        />
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Zatwierdź</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Anuluj</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default VillageAddAdresView;
