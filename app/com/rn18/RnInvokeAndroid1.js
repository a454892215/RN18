import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {NativeModules} from 'react-native';

const {MyNativeModule} = NativeModules;

const RnInvokeAndroid1 = () => {
  function invokeAndroid() {
    MyNativeModule.getDeviceName()
      .then(deviceName => {
        console.log(deviceName);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={invokeAndroid}>
        <Text>Rn调用Android示例1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  modal: {
    margin: 0, // No margin for full-screen effect
    backgroundColor: '#FF0000',
  },
  modalContent: {
    width: '70%',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 8,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
});

export default RnInvokeAndroid1;
