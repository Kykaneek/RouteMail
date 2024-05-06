import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from 'react-native';


export const UserEditComponent = ({ navigation, route }: { navigation: any, route: any }) => {
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    if (route && route.params) {
      const { userData } = route.params;
      setUserData(userData);
    }
  }, [route]);

  const updateUser = () => {
    fetch(`http://192.168.1.130/users/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.ok) {
        Alert.alert('Dane użytkownika zostały zaktualizowane!');
        console.log('Test pomyślnie zdany');
        navigation.navigate('UserPropertiesScreen');
      } else {
        throw new Error('Błąd podczas aktualizacji danych użytkownika');
      }
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Wystąpił błąd podczas aktualizacji danych użytkownika');
    });
  };

  const handleInputChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  const clearInput = (key: string) => {
    setUserData({ ...userData, [key]: '' });
  };

  const BackToPageTwo = () => {
    navigation.navigate('UserPropertiesScreen');
  };

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
              value={userData.name}
              onChangeText={(text) => handleInputChange('name', text)}
            />
            <Text style={styles.label}>Nazwisko:</Text>
            <TextInput
              style={styles.value}
              placeholder="Nazwisko"
              value={userData.nazwisko}
              onChangeText={(text) => handleInputChange('nazwisko', text)}
            />
            <Text style={styles.label}>Numer Kuriera:</Text>
            <TextInput
              style={styles.value}
              placeholder="Numer kuriera"
              value={userData.numerkuriera}
              onChangeText={(text) => handleInputChange('numerkuriera', text)}
            />
          </View>
        </View>

        {/* Middle Text Fields */}
        <View style={styles.middleContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.value}
            placeholder="Email"
            value={userData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <Text style={styles.label}>Rola:</Text>
          <TextInput
            style={styles.value}
            placeholder="Rola"
            value={userData.rola}
            onChangeText={(text) => handleInputChange('rola', text)}
          />
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bottomButton} onPress={updateUser}>
            <Text style={styles.bottomButtonText}>Potwierdź</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={BackToPageTwo}>
            <Text style={styles.bottomButtonText}>Rezygnacja</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


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
