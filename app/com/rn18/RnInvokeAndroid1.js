import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {NativeModules} from 'react-native';

const {MyNativeModule2} = NativeModules;

import Toast from 'react-native-toast-message';

const RnInvokeAndroid1 = () => {
  function invokeAndroid() {
    MyNativeModule2.showToast('Hello from React Native!');
  }

  async function invokeAndroid2() {
    try {
      const deviceName = await MyNativeModule2.getDeviceName();
      console.log('Device Name:', deviceName);
      Toast.show({type: 'success', text1: '操作成功', text2: deviceName});
    } catch (error) {
      console.error('Failed to get device name:', error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={invokeAndroid}>
        <Text>Rn调用Android示例1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={invokeAndroid2}>
        <Text>Rn调用Android示例2</Text>
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
