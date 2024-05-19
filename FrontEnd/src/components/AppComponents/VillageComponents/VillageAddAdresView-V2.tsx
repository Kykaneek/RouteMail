import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

const VillageAddAdresView = ({ navigation, route }: { navigation: any, route: any }) => {
  const [houseNumber, setHouseNumber] = useState('');
  const [villageId, setVillageId] = useState(0);
  const [latitude, setLatitude] = useState({ degrees: '', minutes: '', seconds: '', direction: '' });
  const [longitude, setLongitude] = useState({ degrees: '', minutes: '', seconds: '', direction: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (route && route.params) {
      const { villageId } = route.params;
      setVillageId(villageId);
    }
  }, [route]);

  const handleConfirm = async () => {
    const coordinates = {
      latitude: {
        degrees: parseInt(latitude.degrees),
        minutes: parseInt(latitude.minutes),
        seconds: parseInt(latitude.seconds),
        direction: latitude.direction,
      },
      longitude: {
        degrees: parseInt(longitude.degrees),
        minutes: parseInt(longitude.minutes),
        seconds: parseInt(longitude.seconds),
        direction: longitude.direction,
      },
    };

    try {
      const response = await fetch('http://192.168.1.130:8800/adresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          HouseNumber: houseNumber,
          VillageId: parseInt(villageId),
          AdressCords: coordinates,
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
        <Text style={styles.subtitle}>Latitude</Text>
        <View style={styles.coordinateContainer}>
          <TextInput
            style={styles.smallInput}
            value={latitude.degrees}
            onChangeText={(text) => setLatitude({ ...latitude, degrees: text })}
            placeholder="Degrees"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.smallInput}
            value={latitude.minutes}
            onChangeText={(text) => setLatitude({ ...latitude, minutes: text })}
            placeholder="Minutes"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.smallInput}
            value={latitude.seconds}
            onChangeText={(text) => setLatitude({ ...latitude, seconds: text })}
            placeholder="Seconds"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.smallInput}
            value={latitude.direction}
            onChangeText={(text) => setLatitude({ ...latitude, direction: text })}
            placeholder="Direction (N/S)"
          />
        </View>
        <Text style={styles.subtitle}>Longitude</Text>
        <View style={styles.coordinateContainer}>
          <TextInput
            style={styles.smallInput}
            value={longitude.degrees}
            onChangeText={(text) => setLongitude({ ...longitude, degrees: text })}
            placeholder="Degrees"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.smallInput}
            value={longitude.minutes}
            onChangeText={(text) => setLongitude({ ...longitude, minutes: text })}
            placeholder="Minutes"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.smallInput}
            value={longitude.seconds}
            onChangeText={(text) => setLongitude({ ...longitude, seconds: text })}
            placeholder="Seconds"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.smallInput}
            value={longitude.direction}
            onChangeText={(text) => setLongitude({ ...longitude, direction: text })}
            placeholder="Direction (E/W)"
          />
        </View>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  smallInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '20%',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  coordinateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default VillageAddAdresView;
