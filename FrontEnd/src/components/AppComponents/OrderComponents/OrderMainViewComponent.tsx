import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export const MainOrderComponent = ({ navigation }: { navigation: any }) => {
  
  const GoToItem = () => {
    navigation.navigate('MainOrderItemScreen')
  }

  const ReturnToMenu = () => {
    navigation.navigate('UserViewScreen')
  }

  const CreateNewOrder = () => {
    navigation.navigate('CreateOrderScreen')
  }


  
  
  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Zlecenia</Text>
      </View>
      <View style={styles.createOrderContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={CreateNewOrder}>Stwórz zlecenie</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.currentOrdersText}>Aktualne zlecenia</Text>
      <View style={styles.currentOrdersContainer}>
        <ScrollView style={[styles.scrollView, { width: '100%' }]}>
          {[...Array(5).keys()].map((_, index) => (
            <View key={index} style={styles.orderItem}>
              <View style={styles.orderItemContent}>
                <Text style={styles.orderItemText}>Numer zlecenia: 12345</Text>
                <Text style={styles.orderItemText}>Miejscowość: Warszawa</Text>
                <Text style={styles.orderItemText}>Status: W realizacji</Text>
                <Text style={styles.orderItemText}>Kurier: Jan Kowalski</Text>
                <Text style={styles.orderItemText}>Data utworzenia: 2024-04-20</Text>
              </View>
              <TouchableOpacity style={styles.detailsButton} onPress={GoToItem}>
                <Text style={styles.detailsButtonText}>Zobacz szczegóły</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
     
      <View style={[styles.menuContainer, { width: '100%' }]}>
        <TouchableOpacity style={styles.button} onPress={ReturnToMenu}>
          <Text style={styles.buttonText}>Menu użytkownika</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  createOrderContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  currentOrdersContainer: {
    marginTop: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  currentOrdersText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10
  },
  scrollView: {
    maxHeight: 475,
  },
  orderItem: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height: 200,
  },
  
  orderItemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  orderItemText: {
    fontSize: 16,
  },
  detailsButton: {
    backgroundColor: '#075eec',
    borderRadius: 10,
    padding: 10,
  },
  detailsButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonsContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonsInnerContainer: {
    marginBottom: 10,
  },
  menuContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
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
});


