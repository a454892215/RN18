// Hello World screen component
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

function getPageJumpButton(navigation, name, routerName) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={styles.button}
      onPress={() => navigation.navigate(routerName)}>
      <Text>{name}</Text>
    </TouchableHighlight>
  );
}

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
        width: '100%',
        height: 200,
      }}>
      <View
        style={{
          padding: 10,
          flex: 0,
          /* justifyContent: 'center',*/
          /*alignItems: 'center',*/
          backgroundColor: '#ff0000',
          flexDirection: 'column',
        }}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewSamplePage')}>
          <Text>View使用示例</Text>
        </TouchableOpacity>
        {getPageJumpButton(navigation, 'Text使用示例', 'TextSamplePage')}
        {getPageJumpButton(
          navigation,
          'FlatListSamplePage使用示例',
          'FlatListSamplePage',
        )}
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
