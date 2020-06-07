import React, {useState} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { TextField } from 'react-native-material-textfield';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
// import { authenticate as authenticateCustomer } from '@state/action'
//import { authenticate as authenticateCompany } from '@state/company/company.action'
// import { window } from '@constants';

const window = Dimensions.get('window')

export default function LoginScreen({navigation, authenticateCustomer, data}) {

    return (
        <View style={styles.container}>
            <Text>asdhausydasuydasud</Text>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: window.height,
    width: window.width/1.2,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 80
  },
  registerContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

// const mapStateToProps = ({ reducer }) => ({
//     data: reducer.data,
// });
  
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ authenticateCustomer }, dispatch);
  
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
