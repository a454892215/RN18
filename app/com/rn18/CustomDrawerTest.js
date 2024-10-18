// CustomDrawer.js

import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomRightDrawer from './custom/CustomRightDrawer';

const CustomDrawerTest = () => {
  const [parentSize, setParentSize] = useState({width: 0, height: 0});
  const onChildLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    setParentSize({width, height});
  };

  /** @type { React.MutableRefObject<CustomRightDrawer> }*/
  const drawerRef = useRef(); // 创建ref
  const menuWidth = 120;
  const menuHeight = 180;

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomRightDrawer
        ref={drawerRef}
        menuWidth={menuWidth}
        menuHeight={menuHeight}>
        <View
          style={{
            width: menuWidth,
            height: menuHeight,
            flex: 1,
            backgroundColor: '#d05afd',
            overflow: 'hidden',
            borderRadius: 6,
            marginBottom: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#ff0000'}}>你好</Text>
        </View>
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
              drawerRef.current.toggleDrawer();
            }}>
            <Text style={{fontSize: 16, color: '#ffffff'}}>开关</Text>
          </TouchableOpacity>
        </View>
      </CustomRightDrawer>
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
          drawerRef.current.toggleDrawer();
        }}>
        <Text style={{fontSize: 16, color: '#ffffff'}}>开关</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerTest;
