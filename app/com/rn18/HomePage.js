// Hello World screen component
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const HelloWorldScreen = () => {
  const navigation = useNavigation();
  //  const [count, setCount] = useState(0);
  console.log('navigation:' + navigation);
  // const onPress = () => navigation.navigate('ViewSamplePage');

  return (
    /*   根节点的view高度自动填充满剩余空间*/
    <View
      style={{
        /*flex: 1, 注释后 设置高度才生效*/
        backgroundColor: '#ffFF00',
        alignItems: 'center',
        width: 200,
        height: 200,
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          flex: 1,
          /* justifyContent: 'center',*/
          /*alignItems: 'center',*/
          backgroundColor: '#ff0000',
          flexDirection: 'column',
        }}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewSamplePage')}>
          <Text>View 使用示例</Text>
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