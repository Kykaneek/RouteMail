import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Modal, Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { height, width } = Dimensions.get('window');
const signatureContainerWidth = width * 0.8;

export const  OrderItemComponent = ({ navigation }: { navigation: any }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [awizujModalVisible, setAwizujModalVisible] = useState(false);
  const [zwrotModalVisible, setZwrotModalVisible] = useState(false);
  const [drawPodpis, setDrawPodpis] = useState(false);
  const [paths, setPaths] = useState<string[][]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [isClearButtonClicked, setClearButtonClicked] = useState<boolean>(false);
  const [confirmDeliveryModalVisible, setConfirmDeliveryModalVisible] = useState<boolean>(false);

  const onTouchEnd = () => {
    paths.push(currentPath);
    setCurrentPath([]);
    setClearButtonClicked(false);
  };

  const GoToMap = () =>{
    navigation.navigate('OrderMapScreen');  
  }
  const GoToMainOrder = () => {
    navigation.navigate("MainOrderScreen");
  }

  const onTouchMove = (event: any) => {
    const newPath = [...currentPath];
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;
    const newPoint = `${newPath.length === 0 ? 'M' : ''}${locationX.toFixed(0)},${locationY.toFixed(0)} `;
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };

  const handleClearButtonClick = () => {
    setPaths([]);
    setCurrentPath([]);
    setClearButtonClicked(true);
  };

  const handlePotwierdzOdbiorButtonClick = () => {
    setModalVisible(true);
  };

  const handleConfirmationForDelivery = (confirmed: boolean) => {
    setConfirmDeliveryModalVisible(false);
    if (confirmed) {
      setDrawPodpis(true);
    } else {
      setModalVisible(false);
    }
  };

  const handleAwizujButtonClick = () => {
    setAwizujModalVisible(true);
    setModalVisible(false);
    setDrawPodpis(false);
  };

  const handleZwrotDoNadawcyButtonClick = () => {
    setZwrotModalVisible(true);
    setModalVisible(false);
    setDrawPodpis(false);
  };

  const handleAwizujConfirmation = (confirmed: boolean) => {
    setAwizujModalVisible(false);
    setModalVisible(false);
  };

  const handleZwrotConfirmation = (confirmed: boolean) => {
    setZwrotModalVisible(false);
    setModalVisible(false);
  };

  const handlePodpisConfirmation = (confirmed: boolean) => {
    setDrawPodpis(false);
    setModalVisible(false);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.orderDetailContainer}>
        <Text style={styles.orderDetailText}>Numer zlecenia: 12345</Text>
        <Text style={styles.orderDetailText}>Miejscowość: Warszawa</Text>
        <Text style={styles.orderDetailText}>Status: W realizacji</Text>
        <Text style={styles.orderDetailText}>Kurier: Jan Kowalski</Text>
        <Text style={styles.orderDetailText}>Data utworzenia: 2024-04-20</Text>
      </View>
      <ScrollView style={styles.addressesScrollView}>
        <View style={styles.addressItem}>
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>Miejscowość: Warszawa</Text>
            <Text style={styles.addressText}>Numer domu: 123</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePotwierdzOdbiorButtonClick}
          >
            <Text style={styles.confirmButtonText}>Potwierdź przyjazd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressItem}>
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>Miejscowość: Warszawa</Text>
            <Text style={styles.addressText}>Numer domu: 123</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePotwierdzOdbiorButtonClick}
          >
            <Text style={styles.confirmButtonText}>Potwierdź przyjazd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressItem}>
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>Miejscowość: Warszawa</Text>
            <Text style={styles.addressText}>Numer domu: 123</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePotwierdzOdbiorButtonClick}
          >
            <Text style={styles.confirmButtonText}>Potwierdź przyjazd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressItem}>
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>Miejscowość: Warszawa</Text>
            <Text style={styles.addressText}>Numer domu: 123</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePotwierdzOdbiorButtonClick}
          >
            <Text style={styles.confirmButtonText}>Potwierdź przyjazd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressItem}>
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>Miejscowość: Warszawa</Text>
            <Text style={styles.addressText}>Numer domu: 123</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePotwierdzOdbiorButtonClick}
          >
            <Text style={styles.confirmButtonText}>Potwierdź przyjazd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressItem}>
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>Miejscowość: Warszawa</Text>
            <Text style={styles.addressText}>Numer domu: 123</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePotwierdzOdbiorButtonClick}
          >
            <Text style={styles.confirmButtonText}>Potwierdź przyjazd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressItem}>
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>Miejscowość: Warszawa</Text>
            <Text style={styles.addressText}>Numer domu: 123</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePotwierdzOdbiorButtonClick}
          >
            <Text style={styles.confirmButtonText}>Potwierdź przyjazd</Text>
          </TouchableOpacity>
        </View>
        
        
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popupContainer}>
            <TouchableOpacity style={styles.popupButton} onPress={() => setConfirmDeliveryModalVisible(true)}>
              <Text style={styles.popupButtonText}>Potwierdź odbiór</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupButton} onPress={handleAwizujButtonClick}>
              <Text style={styles.popupButtonText}>Awizuj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupButton} onPress={handleZwrotDoNadawcyButtonClick}>
              <Text style={styles.popupButtonText}>Zwrot do nadawcy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.popupButtonText}>Wróć do szczegółów zlecenia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={zwrotModalVisible}
        onRequestClose={() => setZwrotModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupTitle}>Czy na pewno chcesz zwrócić do nadawcy?</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.confirmationButton, styles.yesButton]} onPress={() => handleZwrotConfirmation(true)}>
                <Text style={styles.confirmationButtonText}>Tak</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.confirmationButton, styles.noButton]} onPress={() => handleZwrotConfirmation(false)}>
                <Text style={styles.confirmationButtonText}>Nie</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={awizujModalVisible}
        onRequestClose={() => setAwizujModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupTitle}>Czy na pewno chcesz awizować?</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.confirmationButton, styles.yesButton]} onPress={() => handleAwizujConfirmation(true)}>
                <Text style={styles.confirmationButtonText}>Tak</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.confirmationButton, styles.noButton]} onPress={() => handleAwizujConfirmation(false)}>
                <Text style={styles.confirmationButtonText}>Nie</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmDeliveryModalVisible}
        onRequestClose={() => setConfirmDeliveryModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupTitle}>Czy na pewno chcesz potwierdzić odbiór?</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.confirmationButton, styles.yesButton]} onPress={() => handleConfirmationForDelivery(true)}>
                <Text style={styles.confirmationButtonText}>Tak</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.confirmationButton, styles.noButton]} onPress={() => handleConfirmationForDelivery(false)}>
                <Text style={styles.confirmationButtonText}>Nie</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {drawPodpis && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={drawPodpis}
          onRequestClose={() => setDrawPodpis(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.popupContainer}>
              <Text style={styles.popupTitle}>Podpis</Text>
              <View style={[styles.svgContainer, { width: signatureContainerWidth }]} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                <Svg height={height * 0.7} width={signatureContainerWidth}>
                  <Path
                    d={paths.join('')}
                    stroke={isClearButtonClicked ? 'transparent' : 'red'}
                    fill={'transparent'}
                    strokeWidth={3}
                    strokeLinejoin={'round'}
                    strokeLinecap={'round'}
                  />
                  {paths.length > 0 &&
                    paths.map((item, index) => (
                      <Path
                        key={`path-${index}`}
                        d={item.join('')}
                        stroke={isClearButtonClicked ? 'transparent' : 'red'}
                        fill={'transparent'}
                        strokeWidth={2}
                        strokeLinejoin={'round'}
                        strokeLinecap={'round'}
                      />
                    ))}
                </Svg>
              </View>
              <TouchableOpacity style={styles.clearButton} onPress={handleClearButtonClick}>
                <Text style={styles.clearButtonText}>Wyczyść</Text>
              </TouchableOpacity>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.confirmationButton, styles.yesButton]} onPress={() => handlePodpisConfirmation(true)}>
                  <Text style={styles.confirmationButtonText}>Zatwierdź</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.confirmationButton, styles.noButton]} onPress={() => handlePodpisConfirmation(false)}>
                  <Text style={styles.confirmationButtonText}>Anuluj</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}

<View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={GoToMap}>
          <Text style={styles.buttonText}>Pokaż mapę zlecenia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={GoToMainOrder}>
          <Text style={styles.buttonText}>Wróć do zleceń</Text>
        </TouchableOpacity>
      </View>

    </View>

    
  );
};

const styles = StyleSheet.create({

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#075eec',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    flex: 1,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },

  outerContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  orderDetailContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  orderDetailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  addressesScrollView: {
    maxHeight: 530,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  addressItem: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  addressContent: {
    flex: 1,
  },
  addressText: {
    fontSize: 14,
    marginBottom: 3,
  },
  confirmButton: {
    backgroundColor: '#075eec',
    borderRadius: 10,
    padding: 5,
  },
  confirmButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  popupButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#075eec',
    alignItems: 'center',
  },
  popupButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  popupTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  confirmationButton: {
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: '#4CAF50',
  },
  noButton: {
    backgroundColor: '#f44336',
  },
  confirmationButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  svgContainer: {
    height: height * 0.7,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  clearButton: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

