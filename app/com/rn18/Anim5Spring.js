import React, {useRef} from 'react';
import {View, Animated, StyleSheet, Button} from 'react-native';

const Anim5Spring = () => {
  const position = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.spring(position, {
      toValue: 100, // 目标位置
      friction: 5, // 摩擦力，影响回弹效果
      tension: 180, // 拉力，影响弹簧的弹性
      useNativeDriver: true, // 使用原生驱动
    }).start(() => {
      Animated.spring(position, {
        toValue: 0, // 目标位置
        friction: 5, // 摩擦力，影响回弹效果
        tension: 180, // 拉力，影响弹簧的弹性
        useNativeDriver: true, // 使用原生驱动
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {transform: [{translateX: position}]}]}
      />
      <Button title="开始Spring动画" onPress={startAnimation} />
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
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Anim5Spring;
