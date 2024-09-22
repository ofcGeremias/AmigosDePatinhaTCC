import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

const PopupExample = () => {
  const delay = 10000; 
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.rowContainer}>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#7FD349" style={styles.icon} />
            <Text style={styles.modalText}>Quer adotar?</Text>
          </View>
          <Text style={styles.modalTextCenter}>
            Para adotar esse pet ou saber mais sobre ele, entre em contato com o protetor;
          </Text>
          <View style={styles.rowContainer}>
            <MaterialCommunityIcons name="email-outline" size={24} color="#7FD349" style={styles.icon} />
            <Text style={styles.emailDoa}>fulano@gmail.com</Text>
          </View>
          <View style={styles.rowContainer}>
            <FontAwesome6 name="whatsapp" size={24} color="#7FD349" style={styles.icon} />
            <Text style={styles.nunDoa}>(11) 99999-9999</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '81%',
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  modalText: {
    fontSize: 18,
  },
  modalTextCenter: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  emailDoa: {
    fontSize: 16,
    marginLeft: 5,
  },
  nunDoa: {
    fontSize: 16,
    marginLeft: 5,
  },
  button: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#7FD349',
    paddingVertical: 5,  
    paddingHorizontal: 20,  
    borderRadius: 17,
    alignItems: 'center',
  },
  buttonText: {
    color: '#7FD349',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PopupExample;
