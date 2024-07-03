// Hello World screen component
import {Text, View, StyleSheet, TouchableOpacity, ListView} from 'react-native';
import React, {useState} from 'react';

const HelloWorldScreen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    /*   根节点的view高度自动填充满剩余空间*/
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffFF00',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff0000',
          flexDirection: 'column',
        }}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>View 使用示例Count: {count}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default HelloWorldScreen;
