import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Alert, ScrollView,} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


export const VillagePropiertieVillageView = ({ navigation, route}: { navigation: any, route: any}) => {
  const [VillageData, setVillage] = useState<any>({});
  const [adresses, setAdres] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    FetchVillageData();
    fetchadresses();
  }, []);

  useFocusEffect(
    useCallback(() => {
      FetchVillageData();
      fetchadresses();
    }, [])
  );

  const fetchadresses = () => {
    // Pobranie danych miejscowości z backendu
    fetch('http://192.168.1.11:8800/adresses')
      .then(response => response.json())
      .then(data => {
        setAdres(data);
      })
      .catch(error => {
        console.error('Error fetching adresses:', error);
      });
  };
/** 
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Symulacja opóźnienia pobierania danych, można zastąpić rzeczywistym pobieraniem danych
    setTimeout(() => {
      FetchVillageData();
      setRefreshing(false);
    }, 1000);
  }, []);
*/
  const FetchVillageData = () => {
    const { VillageData } = route.params;
    setVillage(VillageData);
  };
  

  const GoBack = () => {
    navigation.navigate('VillageMainScreen');
  };

  const GoToEdition = () => {
    navigation.navigate('VillageEditVillageScreen', { VillageData: VillageData });
  };

  const ViewProperties = (adresses : any) => {
    navigation.navigate('VillagePropiertieAdresScreen', { AdresData: adresses });
  };

  const RemoveVillage = () => {
    Alert.alert(
      'Potwierdź',
      'Czy na pewno chcesz usunąć ten miejscowość?',
      [
        {
          text: 'Tak',
          onPress: () => {
            fetch(`http://192.168.1.11:8800/villages/${VillageData.id}`, {
              method: 'DELETE'
            })
            .then(response => {
              if (response.ok) {
                Alert.alert('Miejscowość została usunięty!');
                navigation.navigate('VillageMainScreen');
              } else {
                throw new Error('Błąd podczas usuwania miejscowości');
              }
            })
            .catch(error => {
              console.error(error);
              Alert.alert('Wystąpił błąd podczas usuwania miejscowości');
            });
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




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{VillageData.Village_Name}</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {adresses.map((adresses, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => ViewProperties(adresses)}
            style={[styles.AdresBlock]}
           >
            <View>
              <Text style={styles.adressnumber}>{adresses.HouseNumber}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={GoBack} >
            <Text style={styles.buttonText}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={GoToEdition}>
            <Text style={styles.buttonText}>Edytuj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={RemoveVillage}>
            <Text style={styles.buttonText}>Usuń</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    padding: 20,
  },
  AdresBlock: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  adressnumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailValue: {
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#075eec',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginLeft: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

