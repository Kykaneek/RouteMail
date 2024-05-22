import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import RNSmtpMailer from 'react-native-smtp-mailer';
import { SMTP_USERNAME, SMTP_PASSWORD } from '@env';
import { changePasswordService } from '../../../services/AppServices/usersServices';

export const ChangePasswordComponent = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [enteredRecoveryCode, setEnteredRecoveryCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (route?.params) {
      const { userData } = route.params;
      setUserData(userData);
    }
  }, [route]);

  const GoPrevious = () => {
    navigation.navigate('UserPropertiesScreen');
  };

  const sendRecoveryEmail = (email, recoveryCode) => {
    RNSmtpMailer.sendMail({
      mailhost: 'smtp.gmail.com',
      port: '465',
      ssl: true,
      username: SMTP_USERNAME,
      password: SMTP_PASSWORD,
      from: SMTP_USERNAME,
      recipients: email,
      subject: 'Twój kod odzysku',
      htmlBody: `<p>Twój kod odzysku to: <b>${recoveryCode}</b></p>`,
      attachmentPaths: [],
      attachmentNames: [],
      attachmentTypes: [],
    })
      .then(success => {
        console.log('E-mail został wysłany pomyślnie:', success);
        Alert.alert('Kod odzysku został wysłany na Twój adres e-mail.');
        setIsCodeSent(true);
      })
      .catch(err => {
        console.log('Błąd podczas wysyłania e-maila:', err);
        Alert.alert('Wystąpił błąd podczas wysyłania e-maila.');
      });
  };

  const generateRecoveryCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const fetchUserIdByEmail = async (email) => {
    try {
      const response = await fetch(`http://192.168.1.55:8800/users/email/${email}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Odpowiedź sieci nie była ok ' + response.statusText);
      }

      const data = await response.json();
      setUserId(data.id);
      return data.id; // zwróć userId, jeśli wszystko poszło dobrze
    } catch (error) {
      console.error('Wystąpił problem z operacją fetch:', error);
      Alert.alert('Wystąpił błąd podczas pobierania danych użytkownika.');
      return null; // zwróć null, jeśli wystąpił błąd
    }
  };

  const handleSendCode = async () => {
    const userId = await fetchUserIdByEmail(email);
    if (userId) { // tylko jeśli userId nie jest null
      const recoveryCode = generateRecoveryCode();
      setRecoveryCode(recoveryCode);
      sendRecoveryEmail(email, recoveryCode);
    }
  };

  const verifyRecoveryCode = () => {
    if (enteredRecoveryCode === recoveryCode) {
      Alert.alert('Kod odzysku poprawny. Możesz teraz ustawić nowe hasło.');
    } else {
      Alert.alert('Podany kod odzysku jest nieprawidłowy.');
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Hasła nie są zgodne.');
      return;
    }

    try {
      const response = await fetch(`http://192.168.1.55:8800/users/changepassword/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newPassword: newPassword,
        }),
      });

      if (response.ok) {
        Alert.alert('Twoje hasło zostało pomyślnie zmienione.');
        // Clear form fields
        setEmail('');
        setEnteredRecoveryCode('');
        setNewPassword('');
        setConfirmPassword('');
        setIsCodeSent(false);
      } else {
        const errorData = await response.json();
        console.error('Błąd podczas zmiany hasła:', errorData);
        Alert.alert('Wystąpił błąd podczas zmiany hasła.');
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas zmiany hasła:', error);
      Alert.alert('Wystąpił błąd podczas zmiany hasła.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Odzyskiwanie Hasła</Text>
        {!isCodeSent ? (
          <>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Adres e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleSendCode}>
              <Text style={styles.buttonText}>Wyślij Kod Odzysku</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={GoPrevious}>
              <Text style={styles.buttonText}>Rezygnacja</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              value={enteredRecoveryCode}
              onChangeText={setEnteredRecoveryCode}
              placeholder="Kod Odzysku"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={verifyRecoveryCode}>
              <Text style={styles.buttonText}>Potwierdź Kod Odzysku</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Nowe Hasło"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Potwierdź Nowe Hasło"
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
              <Text style={styles.buttonText}>Zmień Hasło</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  formContainer: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChangePasswordComponent;
