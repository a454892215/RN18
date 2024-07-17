import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

const ExpandableViewSample = () => {
  const [expanded, setExpanded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        /**
         Easing.linear：线性过渡，匀速运动。
         Easing.ease：默认的平滑过渡效果。
         Easing.in：加速运动，先慢后快。
         Easing.out：减速运动，先快后慢。
         Easing.inOut：先加速再减速。
         */
        easing: Easing.out(Easing.exp),
        useNativeDriver: false, // 'false' because we're animating 'height'
      }).start(() => setExpanded(false));
    } else {
      Animated.timing(animation, {
        toValue: 200, // height to expand to
        duration: 400,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false, // 'false' because we're animating 'height'
      }).start(() => setExpanded(true));
    }
  };

  const animatedStyle = {
    height: animation,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleExpand}>
        <Text style={styles.buttonText}>{expanded ? '收起' : '展开'}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.contentContainer, animatedStyle]}>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero in fermentum sodales. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla convallis libero in fermentum
          sodales.
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#E0E0E0',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  contentText: {
    fontSize: 16,
  },
});

export default ExpandableViewSample;
