import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';
import { connect } from "react-redux";
import { TextField } from 'react-native-material-textfield';

import { layout } from '@utils';

export default function RegisterScreen({ registerCompany }) {

    const [form, setForm] = useState({
      username: "", 
      password: "", 
      confirmPassword: "",
      name: "",
      nCardPoints: "",
      state: "",
      city: "",
      address: ""
  })

  const onChange = field => text => {
    setForm({ ...form, [field]: text });
  };

  const onRegisterClick = () => {
      //setClicked(true);
      //authenticate({cpf, password, navigation});
  }

    return (
        <ScrollView style={styles.container}>
          <TextField
            label='Email *'
            onChangeText={onChange("email")}
          />

          <TextField
              label='Nome da empresa *'
              onChangeText={onChange("name")}
          />

          <TextField
            label='Número de pontos do cartão *'
            onChangeText={onChange("nCardPoints")}
          />

          <TextField
            label='Senha *'
            secureTextEntry={true}
            onChangeText={onChange("password")}
          />

          <TextField
            label='Confirmar senha *'
            secureTextEntry={true}
            onChangeText={onChange("confirmPassword")}
          />

          <TextField
            label='Estado *'
            onChangeText={onChange("state")}
          />
          
          <TextField
            label='Cidade *'
            onChangeText={onChange("city")}
          />
          
          <View style={styles.button}>
            <Button
              title="Cadastrar" 
              onPress={onRegisterClick} 
            />
          </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    height: layout.screenHeight/1.5,
    width: layout.defaultContainerWidth,
    alignSelf: 'center',
    marginTop: 20
  },
  button: {
    marginTop: 20,
    marginBottom: 90
  }
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
