import React, {useRef} from 'react';
import {View, Animated, Button, StyleSheet} from 'react-native';

const Anim1Scale = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const startScaling = () => {
    Animated.timing(scaleValue, {
      toValue: 2, // 缩放到2倍大小
      duration: 300, // 动画持续时间为500毫秒
      useNativeDriver: true, // 使用原生驱动提高性能
    }).start();
  };

  const resetScaling = () => {
    Animated.timing(scaleValue, {
      toValue: 1, // 恢复到原始大小
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{scale: scaleValue}]}]} />
      <Button title="放大" onPress={startScaling} />
      <Button title="还原" onPress={resetScaling} />
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
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    marginBottom: 60,
  },
});

export default Anim1Scale;
