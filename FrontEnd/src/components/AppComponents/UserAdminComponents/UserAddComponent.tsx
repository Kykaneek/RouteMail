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
import { createUser } from '../../../services/AppServices/usersServices';

export const UserAddComponent = ({ navigation, route }: { navigation: any, route: any }) => {
  const [userData, setUserData] = useState<any>({
    Name: '',
    SurName: '',
    CourierNumber: '',
    Email: '',
    Role: ''
  });

  useEffect(() => {
    if (route && route.params && route.params.userData) {
      setUserData(route.params.userData);
    }
  }, [route]);

  const create_User = async () => {
    try {
      const success = await createUser(userData);
      if (success) {
        Alert.alert('Użytkownik został dodany!');
        navigation.navigate('UserMainListScreen');
      }
    } catch (error) {
      Alert.alert('Wystąpił błąd podczas tworzenia użytkownika');
    }
  };
  

  const handleInputChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
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
              value={userData.Name}
              onChangeText={(text) => handleInputChange('Name', text)}
            />
            <Text style={styles.label}>Nazwisko:</Text>
            <TextInput
              style={styles.value}
              placeholder="Nazwisko"
              value={userData.SurName}
              onChangeText={(text) => handleInputChange('SurName', text)}
            />
            <Text style={styles.label}>Numer Kuriera:</Text>
            <TextInput
              style={styles.value}
              placeholder="Numer kuriera"
              value={userData.CourierNumber}
              onChangeText={(text) => handleInputChange('CourierNumber', text)}
            />
          </View>
        </View>

        {/* Middle Text Fields */}
        <View style={styles.middleContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.value}
            placeholder="Email"
            value={userData.Email}
            onChangeText={(text) => handleInputChange('Email', text)}
          />
          <Text style={styles.label}>Rola:</Text>
          <TextInput
            style={styles.value}
            placeholder="Rola"
            value={userData.Role}
            onChangeText={(text) => handleInputChange('Role', text)}
          />
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bottomButton} onPress={create_User}>
            <Text style={styles.bottomButtonText}>Utwórz użytkownika</Text>
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
