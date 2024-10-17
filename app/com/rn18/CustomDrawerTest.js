// CustomDrawer.js
import React, {useRef, useState} from 'react';
import {Animated, View, Text, TouchableOpacity} from 'react-native';

const CustomDrawerTest = () => {
  return <CustomDrawer />;
};

// eslint-disable-next-line no-unused-vars
const CustomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const menuWidth = 120;

  const toggleMenu = () => {
    if (isOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [menuWidth, 0], // 右边菜单隐藏
    // outputRange: [-menuWidth, 0], // 左边菜单隐藏
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: menuWidth,
            height: 180,
            backgroundColor: '#335c29',
            justifyContent: 'center',
            alignItems: 'center',
          },
          {transform: [{translateX}]},
        ]}>
        {/* 菜单内容 */}
        <Text>菜单内容</Text>
      </Animated.View>

      {/*悬浮按钮*/}
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 30,
          bottom: 30,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#6200ee',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}
        onPress={toggleMenu}>
        <Text style={{fontSize: 16, color: '#ffffff'}}>开关</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerTest;
