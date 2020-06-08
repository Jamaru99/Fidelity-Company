import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TypeButtons({registerType, setRegisterType}) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttons, registerType === "customer" ? styles.activeButton : styles.inactiveButton]} onPress={() => setRegisterType("customer")}>
              <Text style={[styles.buttonText, registerType === "customer" ? styles.activeButton : styles.inactiveButton]}>Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, registerType === "company" ? styles.activeButton : styles.inactiveButton]} onPress={() => setRegisterType("company")}>
              <Text style={[styles.buttonText, registerType === "company" ? styles.activeButton : styles.inactiveButton]}>Empresa</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  buttons: {
    borderRadius: 2,
    borderWidth: 0.4,
    borderColor: '#28F',
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: '50%'
  },
  activeButton: {
    backgroundColor: '#28F',
    color: 'white'
  },
  inactiveButton: {
    backgroundColor: 'white',
    color: 'blue'
  },

  buttonText:{
    padding: 15,
    fontSize: 16
  },

  buttonContainer: {
    flexDirection: 'row'
  }
});
