import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

export const VillageAddVillageView = ({ navigation }: { navigation: any }) => {
  const [villageName, setVillageName] = useState('');
  const [postCode, setPostCode] = useState('');

  const handleConfirm = () => {
    // Wysyłanie danych do API backendu
    fetch('http://192.168.1.55:8800/villages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Village_Name: villageName,
        PostCode: postCode,
      }),
    })
      .then(response => {
        // Handle response
        if (response.ok) {
          console.log('Miejscowość pomyślnie dodana!');
        } else {
          console.error('Dodanie miejscowości nie powiodło się');
        }
      })
      .catch(error => {
        console.error('Wystąpił błąd w trakie dodawania miejscowości:', error);
      });
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
          value={villageName}
          onChangeText={(text) => setVillageName(text)}
          placeholder="Nazwa miejscowości"
        />
        <TextInput
          style={styles.input}
          value={postCode}
          onChangeText={(text) => setPostCode(text)}
          placeholder="Kod pocztowy"
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
