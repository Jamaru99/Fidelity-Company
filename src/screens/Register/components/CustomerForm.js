import React, {useState} from 'react';
import {
    TextField,
  } from 'react-native-material-textfield';
import {
  Button,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

export default function CustomerForm({registerCustomer, authenticate, customerData}) {

    const [form, setForm] = useState({
        username: "", 
        password: "", 
        confirmPassword: "",
        name: "",
        email: ""
    })

    const onChange = field => text => {
      setForm({ ...form, [field]: text });
    };

    const onRegisterClick = () => {
        //setClicked(true);
        //authenticate({cpf, password, navigation});
      }

    return (
        <ScrollView>
            <TextField
                label='CPF *'
                keyboardType='phone-pad'
                onChangeText={onChange("username")}
                // error={clicked && customerData.error && "CPF errado"}
            />
            <TextField
                label='Nome *'
                onChangeText={onChange("name")}
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
                label='Email'
                onChangeText={onChange("email")}
            />

            <View style={styles.button}>
                <Button
                    title="Cadastrar" 
                    onPress={() => registerCustomer(form)} 
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
  
