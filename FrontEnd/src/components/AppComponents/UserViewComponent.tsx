import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
export const UserViewComponent = ({ navigation }: { navigation: any }) => {

  const GoToOrders = () => {
    navigation.navigate('MainOrderScreen')
  }

  const GoTovehicles = () => {
    navigation.navigate('VehicleViewScreen')
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.userDataContainer}>
        <View style={styles.content}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.image}
          />
          <View style={styles.userData}>
            <Text style={styles.text}>Przykładowe Imie</Text>
            <Text style={styles.text}>Przykładowe nazwisko</Text>
            <Text style={styles.text}>Numer kuriera</Text>
            <Text style={styles.text}>Pojazd</Text>
            <Text style={styles.text}>Aktualne zlecenie</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.hamburger}>
          <View style={styles.menuBox}>
            <View style={[styles.menuLine, styles.whiteLine]}></View>
            <View style={[styles.menuLine, styles.whiteLine]}></View>
            <View style={[styles.menuLine, styles.whiteLine]}></View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsInnerContainer}>
          <TouchableOpacity style={styles.button} onPress={GoToOrders}>
            <Text style={styles.buttonText}>Zlecenia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsInnerContainer}>
          <TouchableOpacity style={styles.button} onPress={GoTovehicles}>
            <Text style={styles.buttonText}>Pojazd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsInnerContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ustawienia lokalizacji</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsInnerContainer}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Wyloguj</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 10,
    margin: 10,
  },
  userDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  userData: {
    marginLeft: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonsContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  buttonsInnerContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#075eec',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  hamburger: {
    marginLeft: 'auto',
    marginRight: 0,
    marginBottom:120
  },
  menuBox: {
    backgroundColor: '#075eec',
    width: 38,
    height: 30,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5, // Zmniejszony padding
    borderWidth: 1,
    borderColor: 'black',
  },
  
  menuLine: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
  },
  whiteLine: {
    backgroundColor: 'white',
  },
})





