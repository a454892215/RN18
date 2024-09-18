import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const ViewSample2 = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: '#ff0000',
          overflow: 'hidden',
          borderRadius: 6,
          flex: 0,
          marginBottom: 3,
          flexDirection: 'row',
          justifyContent: 'center', // 垂直居中
          alignItems: 'center', // 水平居中
        }}>
        <Text style={{fontSize: 16, color: '#ff0000'}}>你好</Text>
      </View>
      <TouchableOpacity
        style={{
          width: 44,
          height: 44,
          borderRadius: 50,
          backgroundColor: '#cccccc',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {}}>
        <Image
          style={{width: 28, height: 28}}
          source={require('../../static/img/home/aaa.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    backgroundColor: '#ff0000',
    overflow: 'hidden',
    borderRadius: 6,
    flex: 0,
    marginBottom: 3,
    flexDirection: 'row',
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
  },
  topView: {
    height: 50,
    backgroundColor: 'red',
  },
});

export default ViewSample2;
