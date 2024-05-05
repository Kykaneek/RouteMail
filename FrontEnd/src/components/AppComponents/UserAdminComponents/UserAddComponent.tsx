import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const UserAddComponent = ({ navigation }: { navigation: any }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = () => {
    // dodanie logiki odpowiedzialnej za wysyłanie danych do serwera
    console.log('Sign in', form);
  };

  const handleSignUp = () => {
    // dodanie logiki nawigacyjnej związanej z ekranem rejestracji
    console.log('Sign up');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        {/* Empty Space for Image with Button */}
        <View style={styles.topImageContainer}>
          <View style={styles.topImage} />
          <TouchableOpacity style={styles.changePhotoButton}>
            <Text style={styles.changePhotoButtonText}>Zmień Zdjęcie</Text>
          </TouchableOpacity>
        </View>

        {/* Vertical Stack of Names */}
        <View style={styles.namesContainer}>
          <Text style={styles.name}>Pojazd</Text>
          <Text style={styles.name}>Imię i Nazwisko</Text>
          <Text style={styles.name}>Email</Text>
          <Text style={styles.name}>Rola</Text>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Zatwierdź Zmiany</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Rezygnacja</Text>
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
  topImageContainer: {
    width: '100%',
    marginBottom: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topImage: {
    flex: 1,
    height: 200, // dostosuj wysokość według potrzeb
    backgroundColor: '#ccc', // kolor zastępczy pustej przestrzeni
  },
  changePhotoButton: {
    backgroundColor: '#075eec',
    height: 200, // taka sama wysokość jak ramka na zdjęcie
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  changePhotoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center', // wyśrodkuj tekst w poziomie
  },
  namesContainer: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 'auto', // pchnięcie w dół
    marginBottom: 20,
  },
  bottomButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '48%', // dostosuj szerokość według potrzeb
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
