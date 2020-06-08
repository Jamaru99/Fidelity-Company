import React, {useState} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import TypeButtons from './components/TypeButtons';
import CompanyForm from './components/CompanyForm';
const window = Dimensions.get('window')

export default function RegisterScreen({registerCustomer}) {

    const [registerType, setRegisterType] = useState("customer");

    return (
        <View style={styles.container}>
              <CompanyForm />

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: window.height,
    width: window.width/1.2,
    alignSelf: 'center',
    marginTop: 60
  },
});

// const mapStateToProps = ({ reducer }) => ({
//     data: reducer.data,
// });
  
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       registerCustomer,
//     },
//     dispatch
//   );
  
// export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
