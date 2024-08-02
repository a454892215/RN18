import * as React from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const P3 = () => <View style={{flex: 1, backgroundColor: '#74b73a'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  p3: P3,
});
// https://reactnavigation.org/docs/tab-view/
export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '标题1'},
    {key: 'second', title: '标题2'},
    {key: 'p3', title: '标题3'},
  ]);

  const CustomTabBar = props => (
    <View style={styles.tabBarContainer}>
      {props.navigationState.routes.map((route, index) => {
        const isFocused = props.navigationState.index === index;

        return (
          <TouchableOpacity
            key={index}
            // onPress={() => props.jumpTo(route.key)}
            onPress={() => setIndex(index)}
            style={[styles.tabItem, isFocused ? styles.activeTab : null]}>
            <Text style={isFocused ? styles.activeTabText : styles.tabText}>
              {route.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const styles = StyleSheet.create({
    scene: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
    tabItem: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: 'black',
    },
    tabText: {
      color: 'grey',
    },
    activeTabText: {
      color: 'black',
    },
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => <CustomTabBar {...props} />}
      initialLayout={{width: layout.width}}
      swipeEnabled={false} // 禁止手势滑动页面
      animationEnabled={false} // 禁止页面翻页效果
      tabBarPosition="bottom"
    />
  );
}
