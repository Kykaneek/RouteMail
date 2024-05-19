import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { fetchVillages } from '../../../services/AppServices/adressServices';

export const VillageMainView = ({ navigation }: { navigation: any }) => {
  const [village, setVillage] = useState<any[]>([]);

  useEffect(() => {
    fetchVillagesData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchVillagesData();
    }, [])
  );

  const fetchVillagesData = async () => {
    try
    {
      const vehicleData = await fetchVillages();
      setVillage(vehicleData);
    }
    catch (error) 
    {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Wystąpił nieznany błąd");
      }
    }
  };


  const GoBack = () => {
    navigation.navigate('UserViewScreen');
  };

  const AddNewVillage = () => {
    navigation.navigate('VillageAddVillageScreen');
  };

  const ViewProperties = (village : any) => {
    navigation.navigate('VillagePropiertieVillageScreen', { VillageData: village });
  };


  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.topButtonText} onPress={GoBack}>Powrót</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton} onPress={AddNewVillage}>
            <Text style={styles.topButtonText}>Dodaj</Text>
          </TouchableOpacity>
          </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {village.map((village, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => ViewProperties(village)}
            style={[styles.villageBlock]}
           >
            <View>
              <Text style={styles.villageName}>{village.Village_Name}</Text>
              <Text style={styles.villagePost}>{village.PostCode}</Text>
  
            
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
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
  scrollViewContent: {
    padding: 20,
  },
  villageBlock: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  selectedvillage: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  villageName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  villagePost: {
    fontSize: 16,
    marginBottom: 10,
  },
  courierInfo: {
    marginTop: 10,
  },
  releaseBtn: {
    color: 'red',
    marginTop: 5,
  },
  selectBtn: {
    color: 'blue',
    marginTop: 5,
  },
});
