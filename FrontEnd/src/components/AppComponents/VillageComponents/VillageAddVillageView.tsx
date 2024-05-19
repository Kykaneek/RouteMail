import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export const VillageAddVillageView = ({ navigation }: { navigation: any }) => {
  const [villageName, setVillageName] = useState<any>({
    Village_Name: '',
    PostCode: '',
  });

  const handleConfirm = () => {
    fetch('http://192.168.1.130:8800/villages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(villageName)
    })
    .then(response => {
      if (response.ok) {
        Alert.alert('Miejscowość została dodana!');
        navigation.navigate('VillageMainScreen');
      } else {
        throw new Error('Błąd podczas tworzenia miejscowości');
      }
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Wystąpił błąd podczas tworzenia miejscowości');
    });
  };

  const handleInputChange = (key: string, value: string) => {
    setVillageName({ ...villageName, [key]: value });
  };

  const handleCancel = () => {
    // Obsługa nawigacji wstecznej/cofania
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Dodaj nową miejscowość</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('Village_Name', text)}
            placeholder="Nazwa miejscowoś"
          />
        <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('PostCode', text)}
            placeholder="kod"
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
