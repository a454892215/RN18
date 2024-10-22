import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';

const CustomRightDrawer = React.forwardRef(
  ({children, menuWidth, menuHeight, styles}, ref) => {
    CustomRightDrawer.displayName = 'CustomRightDrawer';
    const [isOpen, setIsOpen] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleDrawer = () => {
      if (isOpen) {
        Animated.timing(animation, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start(() => setIsOpen(false));
      } else {
        setIsOpen(true);
        Animated.timing(animation, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
      return !isOpen;
    };

    // 将 toggleDrawer 暴露给父组件
    React.useImperativeHandle(ref, () => ({toggleDrawer}));

    const translateX = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [menuWidth, 0], // 右边菜单隐藏
    });

    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            right: 0,
            top: 0,
            width: menuWidth,
            height: menuHeight,
            justifyContent: 'center',
            alignItems: 'center',
          },
          {transform: [{translateX}]},
          styles,
        ]}>
        {/* 渲染子组件 */}
        {children}
      </Animated.View>
    );
  },
);
export default CustomRightDrawer;
