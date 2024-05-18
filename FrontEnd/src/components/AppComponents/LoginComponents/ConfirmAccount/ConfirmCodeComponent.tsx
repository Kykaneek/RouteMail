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

export default function ConfirmAccountCodeComponent({ navigation }: { navigation: any }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const confirmAccount = () => {
    navigation.navigate('ConfirmAccount')
    console.log('Sign in', form);
  };

  const returnToLoginPage = () => {
    navigation.navigate('LoginScreen')
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
                onChangeText={email => setForm({ ...form, email })}
                placeholder="email@email.pl / Numer kuriera"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Kod weryfikacyjny</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Kod weryfikacyjny"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>  


            <View style={styles.formAction}>
  <TouchableOpacity onPress={confirmAccount}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>Potwierdź konto</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={returnToLoginPage}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>Powrót do logowania</Text>
    </View>
  </TouchableOpacity>

</View>


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
    marginBottom: 10
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});

