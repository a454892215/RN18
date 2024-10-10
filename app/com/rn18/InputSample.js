import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const InputSample = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="请输入数字"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="请输入内容"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="请输入密码"
        secureTextEntry={true} // 设置为密码输入
        keyboardType="default"
        value={password}
        onChangeText={text => {
          setPassword(text);
          console.debug('psd:' + text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86ec8b',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    margin: 10,
    padding: 10,
  },
});

export default InputSample;
