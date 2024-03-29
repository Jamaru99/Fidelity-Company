import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  View
} from 'react-native';
import { connect } from "react-redux";
import { TextField } from 'react-native-material-textfield';

import { registerCompany } from '@state';
import { texts } from '@utils';

import styles from './register.style';

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
  }

  const handleRegisterPress = () => {
      registerCompanyDispatched({ form, navigation });
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
          onPress={handleRegisterPress} 
        />
      </View>
    </ScrollView>
  );
}
  
const mapDispatchToProps = {
  registerCompanyDispatched: registerCompany
}
  
export default connect(null, mapDispatchToProps)(RegisterScreen);
