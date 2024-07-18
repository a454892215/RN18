// Hello World screen component
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
// eslint-disable-next-line no-unused-vars
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
        backgroundColor: '#ffFF00',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 0,
        width: '100%',
      }}>
      <View
        style={{
          padding: 8,
          flex: 0,
          /* justifyContent: 'center',*/
          /*alignItems: 'center',*/
          backgroundColor: '#467b32',
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
        {getPageJumpButton(navigation, 'TabView-使用示例', 'TabViewExample')}
        {getPageJumpButton(navigation, '侧滑弹窗效果', 'SlideInModal')}
        {getPageJumpButton(
          navigation,
          'View高度动画效果',
          'ExpandableViewSample',
        )}
        {getPageJumpButton(
          navigation,
          'UI更新方式1：UseState',
          'UpUpdate1UseState',
        )}
        {getPageJumpButton(
          navigation,
          'UI更新方式2：UseState-Props',
          'UIUpdate2Props',
        )}
        {getPageJumpButton(
          navigation,
          'UI更新方式3：useContext',
          'UIUpdate3Context',
        )}
        {getPageJumpButton(navigation, 'StickyHeader', 'StickyHeader')}
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
