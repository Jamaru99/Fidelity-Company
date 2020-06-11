import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { connect } from "react-redux";
import { TextField } from 'react-native-material-textfield';

import { registerCompany } from '@state'
import { layout } from '@utils';

function RegisterScreen({ navigation, registerCompanyDispatched }) {

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
      registerCompanyDispatched({ form, navigation });
      //authenticate({cpf, password, navigation});
  }

    return (
        <ScrollView style={styles.container}>
          <TextField
            label='Email *'
            onChangeText={onChange("username")}
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
    marginBottom: 10
  }
});

const mapStateToProps = ({ reducer }) => ({
    data: reducer.data,
});
  
const mapDispatchToProps = {
  registerCompanyDispatched: registerCompany
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
