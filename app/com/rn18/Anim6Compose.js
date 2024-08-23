import React, {useRef} from 'react';
import {View, Animated, StyleSheet, Button} from 'react-native';

const Anim6Composite = () => {
  const position = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(position, {
        toValue: 100, // 目标位置
        duration: 2000, // 动画持续时间
        useNativeDriver: true, // 使用原生驱动
      }),
      Animated.timing(scale, {
        toValue: 2, // 目标缩放值
        duration: 2000, // 动画持续时间
        useNativeDriver: true, // 使用原生驱动
      }),
      Animated.timing(rotate, {
        toValue: 1, // 目标旋转值
        duration: 2000, // 动画持续时间
        useNativeDriver: true, // 使用原生驱动
      }),
    ]).start(() => {
      // 重置
      resetAnimation();
    });
  };

  // 函数来重置动画值
  const resetAnimation = () => {
    position.setValue(0);
    scale.setValue(1);
    rotate.setValue(0);
  };

  // 旋转动画需要将值从 0 到 1 转换为角度
  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '300deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {translateX: position}, // 平移动画
              {scale: scale}, // 缩放动画
              {rotate: rotateInterpolation}, // 旋转动画
            ],
          },
        ]}
      />
      <Button title="开始动画" onPress={startAnimation} />
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
    width: 60,
    height: 60,
    backgroundColor: 'blue',
  },
});

export default Anim6Composite;
