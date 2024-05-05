import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const UserPropertiesComponent = ({ navigation }: { navigation: any }) => {
  const [userData, setUserData] = useState({
    imię: '',
    nazwisko: '',
    numerkuriera: '',
    pojazd: '',
    aktualneZlecenie: '',
    email: '',
    rola: '',
  });

  useEffect(() => {
    // symulowanie pobrania danych z bazy
    const fetchData = async () => {
      try {
        // miejsce na przyładowe API albo zapytanie do bazy danych
        const response = await fetch('https://example.com/userData');
        const data = await response.json();
        // zakładając ze dane odpowiedzi mają strukturę { imię: '', nazwisko: '', ... }
        setUserData(data);
      } catch (error) {
        console.error('Bład w pobieraniu danych użytkownika:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        {/* Top Photo Frame and Text Fields */}
        <View style={styles.topContainer}>
          <View style={styles.photoFrame}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.photo} />
          </View>
          <View style={styles.textFields}>
            <Text style={styles.label}>Imię:</Text>
            <TextInput
              style={styles.value}
              placeholder="Imię"
              value={userData.imię}
              editable={false}
            />
            <Text style={styles.label}>Nazwisko:</Text>
            <TextInput
              style={styles.value}
              placeholder="Nazwisko"
              value={userData.nazwisko}
              editable={false}
            />
            <Text style={styles.label}>Numer Kuriera:</Text>
            <TextInput
              style={styles.value}
              placeholder="Numer kuriera"
              value={userData.numerkuriera}
              editable={false}
            />
          </View>
        </View>

        {/* Middle Text Fields */}
        <View style={styles.middleContainer}>
          <Text style={styles.label}>Pojazd:</Text>
          <TextInput
            style={styles.value}
            placeholder="Pojazd"
            value={userData.pojazd}
            editable={false}
          />
          <Text style={styles.label}>Aktualne Zlecenie:</Text>
          <TextInput
            style={styles.value}
            placeholder="Aktualne zlecenie"
            value={userData.aktualneZlecenie}
            editable={false}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.value}
            placeholder="Email"
            value={userData.email}
            editable={false}
          />
          <Text style={styles.label}>Rola:</Text>
          <TextInput
            style={styles.value}
            placeholder="Rola"
            value={userData.rola}
            editable={false}
          />
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bottomButton} onPress={() => console.log('Zmień hasło')}>
            <Text style={styles.bottomButtonText}>Zmień hasło</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={() => console.log('Usuń użytkownika')}>
            <Text style={styles.bottomButtonText}>Usuń użytkownika</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={() => console.log('Modyfikuj użytkownika')}>
            <Text style={styles.bottomButtonText}>Modyfikuj użytkownika</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={() => console.log('Powrót do strony')}>
            <Text style={styles.bottomButtonText}>Powrót do strony</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  photoFrame: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginRight: 10,
  },
  photo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textFields: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  middleContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
