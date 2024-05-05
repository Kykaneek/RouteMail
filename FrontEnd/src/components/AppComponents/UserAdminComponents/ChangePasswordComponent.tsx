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

export const ChangePasswordComponent = ({ navigation }: { navigation: any }) => {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (value: string) => {
    setForm({ ...form, password: value });
  };

  const handleConfirmPasswordChange = (value: string) => {
    setForm({ ...form, confirmPassword: value });
  };

  const handlePasswordChangeSubmit = () => {
    // tutaj można dodać logikę związaną ze zmianą hasła
    console.log('Formatka zmiany hasła została wysłana', form);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        {/* New Window with Caption */}
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>Zmiana hasła</Text>
        </View>

        {/* Container for Buttons */}
        <View style={styles.buttonsWrapper}>
          {/* Vertical Stack of Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Pole do wprowadzania hasła</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Pole do ponownego wprowadzania hasła</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePasswordChangeSubmit}>
              <Text style={styles.buttonText}>Zmień/resetuj</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  captionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  caption: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    flex: 1,
    paddingTop: 20, // dodaje wyściółkę aby stworzyć miejsce pomiędzy napisem i przyciskami
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: '#075eec',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
