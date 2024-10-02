// Hello World screen component
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
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
    <ScrollView>
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
          {getPageJumpButton(
            navigation,
            'HorizontalPagerViewS',
            'HorizontalPagerViewS',
          )}
          {getPageJumpButton(
            navigation,
            'VerticalPagerViewS',
            'VerticalPagerViewS',
          )}
          {getPageJumpButton(
            navigation,
            '自定义MyTabComponent',
            'MyTabComponent',
          )}
          {getPageJumpButton(
            navigation,
            'RnInvokeAndroid示例1',
            'RnInvokeAndroid1',
          )}
          {getPageJumpButton(navigation, '动画示例1：缩放', 'Anim1Scale')}
          {getPageJumpButton(navigation, '动画示例2：平移', 'Anim2Translation')}
          {getPageJumpButton(navigation, '动画示例3：旋转', 'Anim3Rotate')}
          {getPageJumpButton(navigation, '动画示例4：颜色', 'Anim4Color')}
          {getPageJumpButton(navigation, '动画示例5：弹性', 'Anim5Spring')}
          {getPageJumpButton(navigation, '动画示例6：组合', 'Anim6Composite')}
          {getPageJumpButton(
            navigation,
            '下拉刷新和加载更多',
            'RefreshAndLoadMore',
          )}
          {getPageJumpButton(navigation, 'ViewSample2', 'ViewSample2')}
          {getPageJumpButton(navigation, 'CustomButton', 'CustomButton')}
          {getPageJumpButton(navigation, 'ApiTestPage', 'ApiTestPage')}
        </View>
      </View>
    </ScrollView>
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
