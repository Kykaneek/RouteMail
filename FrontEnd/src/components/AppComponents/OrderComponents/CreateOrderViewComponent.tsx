import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { SelectList } from 'react-native-dropdown-select-list';

const windowHeight = Dimensions.get('window').height;

export const CreateOrderComponent = ({ navigation }: { navigation: any }) => {
  const [numerZlecenia, setNumerZlecenia] = useState<string>('');
  const [wszystkieAdresy, setWszystkieAdresy] = useState<string[]>(['123', '456', '789']);
  const [dodaneAdresy, setDodaneAdresy] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [zaznaczoneAdresy, setZaznaczoneAdresy] = useState<boolean[]>(Array(wszystkieAdresy.length).fill(false));
  const [selectedMiejscowosc, setSelectedMiejscowosc] = useState<string>('');

  const GoBack =()=>{
    navigation.navigate('MainOrderScreen')
  }

  const toggleCheckbox = (index: number) => {
    const newCheckedState = [...zaznaczoneAdresy];
    newCheckedState[index] = !newCheckedState[index];
    setZaznaczoneAdresy(newCheckedState);
  };

  const dodajAdresy = () => {
    const noweAdresy = wszystkieAdresy.filter((_, index) => zaznaczoneAdresy[index]);
    setDodaneAdresy([...dodaneAdresy, ...noweAdresy]);
    setShowModal(false);
  };

  const usunAdresy = () => {
    const noweAdresy = dodaneAdresy.filter((_, index) => !zaznaczoneAdresy[index]);
    setDodaneAdresy(noweAdresy);
    // Zresetowanie stanu zaznaczonych checkboxów
    setZaznaczoneAdresy(Array(dodaneAdresy.length).fill(false));
  };

  const data = [
    { key: '1', value: 'NowySącz' },
    { key: '2', value: 'Warszawa' },
    { key: '3', value: 'Nowy Jork' },
    { key: '4', value: 'Frankfurt' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Numer zlecenia:</Text>
        <TextInput
  placeholder="Wprowadź numer zlecenia"
  value={numerZlecenia}
  onChangeText={setNumerZlecenia}
  style={[styles.inputControl]} // Remove styles.input here
/>

        <SelectList
          data={data}
          setSelected={setSelectedMiejscowosc}
          placeholder='Wprowadź miejscowość'
          dropdownStyles={styles.selectListDropdown}
          boxStyles={styles.selectListBox}
          dropdownItemStyles={styles.dropdownItem}
        />
      </View>

      <TouchableOpacity onPress={() => setShowModal(true)} style={styles.formAction}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Dodaj adres</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.inputLabel}>Lista aktualnych adresów:</Text>
            <ScrollView style={[styles.scrollView, { maxHeight: windowHeight * 0.7 }]}>
              {wszystkieAdresy.map((numerDomu: string, index: number) => (
                <TouchableOpacity
                  key={`adres-${index}`}
                  onPress={() => toggleCheckbox(index)}
                  style={[styles.inputControl, { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }]}
                >
                  <CheckBox
                    value={zaznaczoneAdresy[index]}
                    onValueChange={() => toggleCheckbox(index)}
                  />
                  <Text style={{ marginLeft: 10 }}>{numerDomu}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={dodajAdresy} style={[styles.btn, styles.actionButton]}>
                <Text style={styles.btnText}>Wybierz</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowModal(false)} style={[styles.btn, styles.cancelButton]}>
                <Text style={styles.btnText}>Anuluj</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.scrollView}>
        {/* Lista dodanych adresów */}
        <View style={styles.dodaneAdresyContainer}>
          <Text style={styles.dodaneAdresyLabel}>Dodane adresy:</Text>
          {dodaneAdresy.map((adres: string, index: number) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <CheckBox
                value={zaznaczoneAdresy[index]}
                onValueChange={() => toggleCheckbox(index)}
              />
              <Text style={styles.adresText}>{adres}</Text>
            </View>
          ))}
        </View>
      </ScrollView>


      {/* Bottom buttons container */}
      <View style={styles.bottomButtonsContainer}>
              {/* Usuwanie adresów */}
      {dodaneAdresy.length > 0 && (
        <TouchableOpacity onPress={usunAdresy} style={styles.usunAdresyButton}>
          <View style={[styles.btn, { backgroundColor: '#d62828', borderColor: '#d62828' }]}>
            <Text style={styles.btnText}>Usuń zaznaczone adresy</Text>
          </View>
        </TouchableOpacity>
      )}

        <TouchableOpacity style={styles.bottomButton}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Utwórz zlecenie</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={GoBack}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Anuluj</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#e8ecf4',
  },
  inputContainer: {
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
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: '80%',
    alignItems: 'stretch',
  },
  scrollView: {
    marginBottom: 16,
    maxHeight: windowHeight * 0.5, // Limiting the height of ScrollView
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  actionButton: {
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  cancelButton: {
    backgroundColor: '#d62828',
    borderColor: '#d62828',
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff', // Added background color
    borderTopWidth: 1,
    borderTopColor: '#C9D3DB',
  },
  bottomButton: {
    marginHorizontal: 8,
    marginTop: 10,
  },
  dodaneAdresyContainer: {
    paddingHorizontal: 20,
  },
  dodaneAdresyLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  adresText: {
    fontSize: 14,
    marginBottom: 3,
  },
  usunAdresyButton: {
    marginBottom: 16,
    alignSelf: 'center',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
  },
  selectListDropdown: {
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  selectListBox: {
    backgroundColor: '#fff',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
});

export default CreateOrderComponent;
