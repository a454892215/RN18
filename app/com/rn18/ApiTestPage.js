import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import React from 'react';

const {height} = Dimensions.get('window');

const ApiTestPage = () => {
  return (
    <View style={styles}>
      <Pressable onPress={() => console.log('===外部View被点击')}>
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: '#ff0000',
            flex: 0,
            marginBottom: 3,
            flexDirection: 'column',
            justifyContent: 'center', // 垂直居中
            alignItems: 'center', // 水平居中
          }}>
          <Text
            style={{fontSize: 12, fontWeight: '400', color: '#000000'}}
            onPress={() => console.log('=========点按钮')}
            onLongPress={() => console.log('=========长按钮')}>
            短/长按扭
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: height,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default ApiTestPage;
