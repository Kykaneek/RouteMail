import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

export const VillageEditVillageView = ({ navigation }: { navigation: any }) => {
  const [location, setLocation] = useState(locationName);
  const [addresses, setAddresses] = useState('');

  const handleConfirm = () => {
    // Obsługa zatwierdzenia edycji miejscowości
  };

  const handleCancel = () => {
    // Obsługa anulowania edycji miejscowości
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{location}</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={(text) => setLocation(text)}
          placeholder="Nazwa miejscowości"
        />
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          value={addresses}
          onChangeText={(text) => setAddresses(text)}
          placeholder="Adresy"
        />
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Zatwierdź</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Rezygnuj</Text>
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
