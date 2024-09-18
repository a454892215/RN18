import React from 'react';
import {View, StyleSheet} from 'react-native';

const ViewSample2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView} />
      <View style={styles.middleView} />
      <View style={styles.bottomView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    height: 50,
    backgroundColor: 'red',
  },
  middleView: {
    flex: 1, // 占据剩余空间
    backgroundColor: 'green',
  },
  bottomView: {
    height: 50,
    backgroundColor: 'blue',
  },
});

export default ViewSample2;
