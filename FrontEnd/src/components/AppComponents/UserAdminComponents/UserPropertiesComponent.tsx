import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, Alert, ScrollView, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import hooka useFocusEffect
import { removeUser } from '../../../services/AppServices/usersServices';

const UserPropertiesComponent = ({ navigation, route }: { navigation: any, route: any }) => {
  const [userData, setUserData] = useState<any>({});
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    fetchUserData();
  }, []);

useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, [])
  );

  const fetchUserData = () => {
    const { userData } = route.params;
    setUserData(userData);
  };

  const EditUser = () => {
    navigation.navigate('UserEditScreen', { userData: userData }); // Przekazanie danych użytkownika do ekranu edycji
    console.log(userData);
  };

  const ChangePassword = () => {
    navigation.navigate('ChangePasswordScreen', { userData: userData });
  };
  
  const BackToPage = () => {
    navigation.navigate('UserMainListScreen');
  };

  const RemoveUser = async () => {
    Alert.alert(
      'Potwierdź',
      'Czy na pewno chcesz usunąć tego użytkownika?',
      [
        {
          text: 'Tak',
          onPress: async () => {
            try {
              const success = await removeUser(userData.id);
              if (success) {
                Alert.alert('Użytkownik został usunięty!');
                navigation.navigate('UserMainListScreen');
              }
            } catch (error) {
              Alert.alert('Wystąpił błąd podczas usuwania użytkownika');
            }
          },
        },
        {
          text: 'Nie',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };
  

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Symulacja opóźnienia pobierania danych, można zastąpić rzeczywistym pobieraniem danych
    setTimeout(() => {
      fetchUserData();
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.container}>
          {/* Górny kontener z danymi użytkownika */}
          <View style={styles.topContainer}>
            {/* Ramka z obrazkiem */}
            <View style={styles.photoFrame}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.photo} />
            </View>
            {/* Pola tekstowe */}
            <View style={styles.textFields}>
              <Text style={styles.label}>Imię:</Text>
              <TextInput
                style={styles.value}
                placeholder="Imię"
                value={userData.Name}
                editable={false}
              />
              <Text style={styles.label}>Nazwisko:</Text>
              <TextInput
                style={styles.value}
                placeholder="Nazwisko"
                value={userData.SurName}
                editable={false}
              />
              <Text style={styles.label}>Numer Kuriera:</Text>
              <TextInput
                style={styles.value}
                placeholder="Numer kuriera"
                value={userData.CourierNumber}
                editable={false}
              />
            </View>
          </View>

          {/* Środkowy kontener z dodatkowymi danymi użytkownika */}
          <View style={styles.middleContainer}>
            <Text style={styles.label}>Pojazd:</Text>
            <TextInput
              style={styles.value}
              placeholder="Pojazd"
              value={userData.pojazd}
              editable={false}
            />
            <Text style={styles.label}>Aktualne Zlecenie:</Text>
            <TextInput
              style={styles.value}
              placeholder="Aktualne zlecenie"
              value={userData.aktualneZlecenie}
              editable={false}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.value}
              placeholder="Email"
              value={userData.Email}
              editable={false}
            />
            <Text style={styles.label}>Rola:</Text>
            <TextInput
              style={styles.value}
              placeholder="Rola"
              value={userData.Role}
              editable={false}
            />
          </View>

          {/* Dolny kontener z przyciskami */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.bottomButton} onPress={ChangePassword}>
              <Text style={styles.bottomButtonText}>Zmień hasło</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton} onPress={RemoveUser}>
              <Text style={styles.bottomButtonText}>Usuń użytkownika</Text>
            </TouchableOpacity>
            {/* Użyj funkcji EditUser do nawigacji do ekranu edycji użytkownika */}
            <TouchableOpacity style={styles.bottomButton} onPress={EditUser}>
              <Text style={styles.bottomButtonText}>Modyfikuj użytkownika</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton} onPress={BackToPage}>
              <Text style={styles.bottomButtonText}>Powrót do strony</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flexGrow: 1,
  },
});

export default UserPropertiesComponent;
