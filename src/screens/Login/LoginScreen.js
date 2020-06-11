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
// import { authenticate } from '@state'
//import { authenticate as authenticateCompany } from '@state/company/company.action'
// import { window } from '@constants';
import { texts, layout } from '@utils';
import { authenticate } from '@state';

function LoginScreen({navigation, authenticateDispatched, data}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLoginClick = () => {
        authenticateDispatched({username, password, navigation });
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
                onPress={onLoginClick} 
                disabled={!username || !password}
            />

            <Text>{data.error}</Text>

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
    flexDirection: 'row',
    alignSelf: 'center'
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

const mapStateToProps = ({ reducer }) => ({
    data: reducer.data,
});
  
const mapDispatchToProps = {
  authenticateDispatched: authenticate
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
