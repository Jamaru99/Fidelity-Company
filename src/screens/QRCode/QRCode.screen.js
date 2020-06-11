import React, { useState } from 'react';
import { connect } from "react-redux";
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from './qrcode.style';

function QRCodeScreen({ companyData }) {

    return (
        <View style={styles.container}>
            <Text>Mostre este QR Code ao cliente para que um ponto no cartão dele seja contabilizado</Text>
            <Image 
              style={styles.image}
              source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${companyData._id}` }}
            />
        </View>
    );
}

const mapStateToProps = (state) => ({
    companyData: state.companyData,
});

  
export default connect(mapStateToProps, null)(QRCodeScreen);
