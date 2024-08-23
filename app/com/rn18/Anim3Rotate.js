import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';

const Anim3Rotate = () => {
  // 使用 useRef 创建 Animated.Value
  const rotateValue = useRef(new Animated.Value(0)).current;

  // 定义旋转动画函数
  const startRotation = () => {
    Animated.timing(rotateValue, {
      toValue: 1, // 动画到 1，表示从 0 度到 360 度
      duration: 1000, // 动画持续时间为 1000 毫秒
      //useNativeDriver: useNativeDriver: true 用于启用原生驱动动画，但需要注意，某些动画属性（例如高度、宽度）无法使用原生驱动。
      // 性能: 使用 useNativeDriver 可以提升动画性能，特别是在低端设备上。
      useNativeDriver: true, // 使用原生动画驱动
    }).start(() => {
      // 动画结束后回调，重置 rotateValue
      rotateValue.setValue(0);
      //   并重复动画
      // startRotation();
    });
  };

  // 将 rotateValue 映射到一个旋转角度
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1], // 输入范围
    outputRange: ['0deg', '360deg'], // 输出范围
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{rotate}]}]}>
        <Text style={styles.text}>旋转动画</Text>
      </Animated.View>
      <TouchableOpacity onPress={startRotation} style={styles.button}>
        <Text style={styles.buttonText}>开始旋转</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Anim3Rotate;
