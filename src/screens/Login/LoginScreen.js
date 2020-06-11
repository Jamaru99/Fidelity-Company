import React, {useState} from 'react';
import { connect } from "react-redux";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

import { texts, layout, colors } from '@utils';
import { authenticate } from '@state';

function LoginScreen({navigation, authenticateDispatched, data}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginPress = () => {
        authenticateDispatched({ username, password, navigation });
    }

    return (
        <View style={styles.container}>

            <TextField
                label={texts.login["placeholder:username"]}
                onChangeText={(text) => setUsername(text)}
            />
            <TextField
                label={texts.login["placeholder:password"]}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <Button 
                title={texts.login["button:login"]} 
                onPress={handleLoginPress} 
                disabled={!username || !password}
            />

            <Text style={styles.errorText}>{data.error}</Text>

            <View style={styles.registerContainer}>
                <Text>{texts.login["new_user"]} </Text>
                <TouchableOpacity onPress={_ => navigation.navigate("RegisterScreen")}>
                  <Text style={styles.registerText}>{texts.login["link:sign_up"]}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: layout.screenHeight,
    width: layout.defaultContainerWidth,
    alignSelf: 'center',
    marginTop: '25%'
  },
  registerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  registerText: {
    color: colors.tintColor,
    textDecorationLine: 'underline'
  },
  errorText: {
    marginTop: 10,
    color: colors.errorText
  }
});

const mapStateToProps = ({ reducer }) => ({
    data: reducer.data,
});
  
const mapDispatchToProps = {
  authenticateDispatched: authenticate
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
