import React, {useRef} from 'react';
import {View, Animated, Button, StyleSheet} from 'react-native';

const Anim2Translation = () => {
  const translateValue = useRef(new Animated.Value(0)).current;

  const startTranslation = () => {
    Animated.timing(translateValue, {
      toValue: 150, // Move the element 150 units to the right
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  const resetTranslation = () => {
    Animated.timing(translateValue, {
      toValue: 0, // Move the element back to its original position
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {transform: [{translateX: translateValue}]}]}
      />
      <Button title="Move Right" onPress={startTranslation} />
      <Button title="Reset" onPress={resetTranslation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginBottom: 20,
  },
});

export default Anim2Translation;
