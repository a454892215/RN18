// CustomDrawer.js
import {EventEmitter} from 'events';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, Text, TouchableOpacity} from 'react-native';

const eventBus = new EventEmitter();
const toggle2MenuEvent = 'openMenuEvent';

const CustomDrawerTest = () => {
  const [parentSize, setParentSize] = useState({width: 0, height: 0});
  const onChildLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    setParentSize({width, height});
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomDrawer>
        <View
          style={{
            width: parentSize.width,
            height: parentSize.height,
            position: 'absolute',
            left: -parentSize.width,
            bottom: 0,
            top: 70,
            backgroundColor: '#ffc86c',
            borderRadius: 6,
            marginBottom: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onLayout={onChildLayout}
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              backgroundColor: '#6200ee',
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
            }}
            onPress={() => {
              eventBus.emit(toggle2MenuEvent);
            }}>
            <Text style={{fontSize: 16, color: '#ffffff'}}>开关</Text>
          </TouchableOpacity>
        </View>
      </CustomDrawer>
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
        onPress={() => {
          eventBus.emit(toggle2MenuEvent);
        }}>
        <Text style={{fontSize: 16, color: '#ffffff'}}>开关</Text>
      </TouchableOpacity>
    </View>
  );
};

// eslint-disable-next-line no-unused-vars
const CustomDrawer = myProps => {
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

  useEffect(() => {
    // 监听事件
    const toggleMenuListener = () => {
      toggleMenu();
    };
    eventBus.on(toggle2MenuEvent, toggleMenuListener);
    return () => {
      eventBus.off(toggle2MenuEvent, toggleMenuListener); // 清除监听
    };
  }, [isOpen]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [menuWidth, 0], // 右边菜单隐藏
    // outputRange: [-menuWidth, 0], // 左边菜单隐藏
  });

  return (
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
      {/* 渲染子组件 */}
      {myProps.children}
    </Animated.View>
  );
};

export default CustomDrawerTest;
