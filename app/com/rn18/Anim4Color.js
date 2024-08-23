import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';

const Anim3Color = () => {
  // 使用 useRef 创建 Animated.Value
  const colorValue = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false); // 动画状态
  // 定义颜色渐变动画函数
  const startColorAnimation = () => {
    if (isAnimating) return; // 如果动画正在播放，则返回
    setIsAnimating(true); // 设置动画状态为播放中

    Animated.timing(colorValue, {
      toValue: 1, // 动画结束值
      duration: 2000, // 动画持续时间为 2000 毫秒
      useNativeDriver: false, // useNativeDriver 不能用于颜色渐变，需要设为 false
    }).start(() => {
      // 动画结束后重置并再次开始动画
      Animated.timing(colorValue, {
        toValue: 0, // 反向动画
        duration: 2000,
        useNativeDriver: false,
      }).start(() => setIsAnimating(false));
    });
  };

  // 使用 interpolate 方法将 colorValue 映射为颜色
  const backgroundColor = colorValue.interpolate({
    inputRange: [0, 1], // 输入值范围
    outputRange: ['red', 'blue'], // 输出颜色范围，从红色到蓝色
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {backgroundColor}]}>
        <Text style={styles.text}>颜色渐变动画</Text>
      </Animated.View>
      <TouchableOpacity onPress={startColorAnimation} style={styles.button}>
        <Text style={styles.buttonText}>开始动画</Text>
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

export default Anim3Color;
