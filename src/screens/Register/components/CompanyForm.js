import React, {useState} from 'react';
import {
    TextField,
  } from 'react-native-material-textfield';
import {
  Button,
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

export default function CompanyForm({navigation, authenticate, customerData}) {

    const [form, setForm] = useState({
        cnpj: "", 
        password: "", 
        confirmPassword: "",
        name: "",
        nCardPoints: "",
        email: "",
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <TextField
                label='CNPJ *'
                keyboardType='phone-pad'
                onChangeText={onChange("cnpj")}
                // error={clicked && customerData.error && "CPF errado"}
            />
            <TextField
                label='Nome *'
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
            
            <TextField
                label='Email'
                onChangeText={onChange("email")}
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
  button: {
    marginTop: 20,
    marginBottom: 90
  },
});
  
