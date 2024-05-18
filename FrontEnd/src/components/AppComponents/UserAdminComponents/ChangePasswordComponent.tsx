import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { changePasswordService } from '../../../services/AppServices/usersServices';

export const ChangePasswordComponent = ({ navigation, route }: { navigation: any, route: any }) => {
  const [userData, setUserData] = useState<any>({});
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    console.log(route.params);
    if (route && route.params) {
      const { userData } = route.params;
      setUserData(userData);
    }
  }, [route]);
  
  const GoPrevious = () => {
    navigation.navigate('UserPropertiesScreen');
  };

  const changePassword = async () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert("Błąd", "Nowe hasło i potwierdzenie hasła nie zgadzają się.");
      return;
    }

    try {
      const responseData = await changePasswordService(userData.id, form.password);
      console.log(responseData);
      Alert.alert("Sukces", "Hasło zostało pomyślnie zmienione.");
    } catch (error) {
      console.error(error);
      Alert.alert("Błąd", "Wystąpił błąd podczas zmiany hasła.");
    }
  


    // Przygotuj dane do wysłania na serwer
    const data = {
      id: userData.id,
      newPassword: form.password,
    };

    // Wyślij żądanie do serwera
    fetch(`http://192.168.1.130:8800/users/changepassword/${userData.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Błąd podczas zmiany hasła');
      }
      return console.log(response.json());
    })
    .then(responseData => {
      console.log(responseData);
      Alert.alert("Sukces", "Hasło zostało pomyślnie zmienione.");
      // Możesz również dodać nawigację z powrotem do poprzedniego ekranu
    })
    .catch(error => {
      console.error(error);
      Alert.alert("Błąd", "Wystąpił błąd podczas zmiany hasła.");
    });
  };

  const handlePasswordChange = (value: string) => {
    setForm({ ...form, password: value });
  };

  const handleConfirmPasswordChange = (value: string) => {
    setForm({ ...form, confirmPassword: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>Zmiana hasła</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Nowe hasło</Text>
        <TextInput
          autoCorrect={false}
          onChangeText={handlePasswordChange}
          placeholder="********"
          placeholderTextColor="#6b7280"
          style={styles.inputControl}
          secureTextEntry={true}
          value={form.password}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Powtórz hasło</Text>
        <TextInput
          autoCorrect={false}
          onChangeText={handleConfirmPasswordChange}
          placeholder="********"
          placeholderTextColor="#6b7280"
          style={styles.inputControl}
          secureTextEntry={true}
          value={form.confirmPassword}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={changePassword}>
          <Text style={styles.buttonText}>Zmień hasło</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          >
          <Text style={styles.buttonText}>Wyślij kod odzysku</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={GoPrevious}>
          <Text style={styles.buttonText}>Rezygnacja</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  caption: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputLabel: {
    marginBottom: 5,
    color: '#333',
  },
  inputControl: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    minWidth: 300,
  },
  buttonsWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#075eec',
    paddingVertical: 15,
    borderRadius: 10,
    minWidth: 300,
    marginBottom: 5
  },
  buttonText: {
    marginBottom: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ChangePasswordComponent;
