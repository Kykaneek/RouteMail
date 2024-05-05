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

export const UserMainListComponent = ({ navigation }: { navigation: any }) => {
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
        {/* Top Buttons */}
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.topButtonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.topButtonText}>Dodaj użytkownika</Text>
          </TouchableOpacity>
        </View>

        {/* Scroll-view with Buttons */}
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity style={styles.scrollButton} onPress={handleSignIn}>
            <Text style={styles.scrollButtonText}>Informacje skrótowe użytkownika</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollButton} onPress={handleSignUp}>
            <Text style={styles.scrollButtonText}>Zobacz szczegóły</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  topButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  topButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  scrollButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  scrollButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
