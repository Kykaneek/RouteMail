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

const LoginComponent = ({ navigation }: { navigation: any }) => {
  const [form, setForm] = useState({
    Email: '',
    Password: '',
  });
 
  
  const handleSignIn = async () => {
    console.log(form);
    try {
      const response = await fetch('http://192.168.1.130:8800/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (!response.ok) {
        console.error('Błąd logowania: ', response.status);
        return;
      }

      navigation.navigate('UserViewScreen');
    } catch (error) {
      console.error('Błąd logowania: ', error);
    }
  };
  
  

  const PasswordForgotten = () => {
    navigation.navigate('ConfirmReturnCode');      
  };

  const getAccount = () => {
    navigation.navigate('ConfirmCodeAccount');
    console.log('Sign up');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView style={{ marginTop: '30%' }}>
          <View style={styles.header}>
            <Text style={styles.title}>
              <Text style={{ color: '#075eec' }}>RouteMail</Text>
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email lub numer kuriera</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={Email => setForm({ ...form, Email })}
                placeholder="email@email.pl / Numer kuriera"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.Email} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Hasło</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={Password => setForm({ ...form, Password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.Password} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleSignIn}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Zaloguj się</Text>
                </View>
              </TouchableOpacity>
            </View>

            
            <TouchableOpacity onPress={PasswordForgotten} style={{ marginTop: 'auto', marginBottom: 10 }}>
              <Text style={styles.formLink}>Zapomniałem hasła</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={getAccount} style={{ marginBottom: 10 }}>
              <Text style={styles.formFooter}>Potwierdź odbiór konta</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
    textDecorationLine: 'underline' // Dodaj ten styl
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
    textDecorationLine: 'underline' // Dodaj ten styl
  },
  
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});

export default LoginComponent;
