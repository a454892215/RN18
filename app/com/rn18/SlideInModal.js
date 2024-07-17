import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  BackHandler,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

const SlideInModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useState(
    new Animated.Value(-Dimensions.get('window').width),
  )[0];

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -Dimensions.get('window').width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim]);

  const showModal = () => {
    setIsVisible(true);
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
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isVisible}
        style={styles.modal}
        onBackdropPress={hideModal}
        backdropOpacity={0.3}
        onRequestClose={hideModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft">
        <Animated.View
          style={[styles.modalContent, {transform: [{translateX: slideAnim}]}]}>
          <Text>Modal Content</Text>
          <TouchableOpacity onPress={hideModal}>
            <Text>Close Modal</Text>
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
  },
  modalContent: {
    width: '60%',
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
