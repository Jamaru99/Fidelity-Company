import React, { useState } from 'react';
import { connect } from "react-redux";
import { TextField } from 'react-native-material-textfield';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions
} from 'react-native';
// import { authenticate as authenticateCustomer } from '@state/action'
//import { authenticate as authenticateCompany } from '@state/company/company.action'
// import { window } from '@constants';

const window = Dimensions.get('window')

export default function LoginScreen({ navigation, data }) {

    return (
        <View style={styles.container}>
            <Text>Mostre o QR Code ao cliente para que um ponto no cartão dele seja contabilizado</Text>
            <Image 
              style={styles.image}
              source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: window.height/1.5,
    width: window.width/1.2,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 80,
  },
  image: {
    width: 150,
    height: 150
  }
});

// const mapStateToProps = ({ reducer }) => ({
//     data: reducer.data,
// });
  
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ authenticateCustomer }, dispatch);
  
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
