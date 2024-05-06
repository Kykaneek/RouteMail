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

export const UserMainListComponent = ({ navigation }: { navigation: any }) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // Pobranie danych użytkowników z backendu
    fetch('http://192.168.1.130:8800/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const GoBack = () => {
    navigation.navigate('UserViewScreen');
  };

  const AddNewUser = () => {
    navigation.navigate('UserAddScreen');
  };
  
  const ViewProperties = (userData: any) => {
    navigation.navigate('UserPropertiesScreen', { userData });
  };
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        {/* Top Buttons */}
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.topButton} onPress={GoBack}>
            <Text style={styles.topButtonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton} onPress={AddNewUser}>
            <Text style={styles.topButtonText}>Dodaj użytkownika</Text>
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
          {/* List of users */}
          {users.map((user, index) => (
            <View key={index} style={styles.userBox}>
              <View style={styles.userBoxPart}>
                <Text>Imię</Text>
                <Text style ={styles.userBoxText}>{user.Name}</Text>
                <Text>Nazwisko</Text>
                <Text style ={styles.userBoxText}>{user.SurName}</Text>
                <Text>Numer Kuriera</Text>
                <Text style ={styles.userBoxText}>{user.CourierNumber}</Text>
              </View>
              <View style={styles.userBoxPart}>
                <TouchableOpacity
                  style={styles.scrollButton}
                  onPress={() => ViewProperties(user)}>
                  <Text style={styles.scrollButtonText}>Zobacz szczegóły</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

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
    paddingVertical: 15,
    paddingHorizontal: 25,
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
    backgroundColor: 'lightblue',
    alignItems: 'center', // Wyrównanie zawartości w poziomie do środka
  },
  scrollButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: 110,
  },
  scrollButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userBox: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    minHeight: 150,
    width: 325,
    marginTop: 10,
    marginBottom: 10,
  },
  userBoxPart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 162.5,
    marginLeft:15
  },
  userBoxText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default UserMainListComponent;
