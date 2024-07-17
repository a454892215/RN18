import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

const SlideInModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useState(
    new Animated.Value(-Dimensions.get('window').width),
  )[0];

  const showModal = () => {
    setIsVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showModal}>
        <Text>打开侧滑菜单</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isVisible}
        style={styles.modal}
        // 当用户点击模态框外部的背景（即“backdrop”）时会触发这个回调函数
        onBackdropPress={hideModal}
        backdropOpacity={0.2}
        // 点击返回键触发
        //  animationInTiming={2000} // 设置显示动画时间为 500 毫秒
        // animationOutTiming={0} // 设置隐藏动画时间为 300 毫秒
        onRequestClose={hideModal}
        /**
                  animationIn 属性可以接受字符串形式的动画名称，常见的动画效果包括：
                       slideInLeft：模态框从屏幕左侧滑入。
                       slideInRight：模态框从屏幕右侧滑入。
                       slideInUp：模态框从屏幕底部滑入。
                       slideInDown：模态框从屏幕顶部滑入。
                       fadeIn：模态框渐入显示。
                       zoomIn：模态框从小到大缩放显示。
                */
        animationIn="slideInLeft"
        animationOut="slideOutLeft">
        <Animated.View
          style={[styles.modalContent, {transform: [{translateX: slideAnim}]}]}>
          <Text>Modal Content</Text>
          <TouchableOpacity onPress={hideModal}>
            <Text>关闭侧滑菜单</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>
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
  modal: {
    margin: 0, // No margin for full-screen effect
    backgroundColor: '#FF0000',
  },
  modalContent: {
    width: '70%',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 8,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
});

export default SlideInModal;
