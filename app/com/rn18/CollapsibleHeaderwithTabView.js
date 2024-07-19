import * as React from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view'; // Version can be specified in package.json
import ContactsList from './ContactsList';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = 240;
const COLLAPSED_HEIGHT = 52;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
// https://github.com/PedroBern/react-native-collapsible-tab-view 待测试
export default class MyTabView extends React.Component {
  // eslint-disable-next-line flowtype/no-types-missing-file-annotation
  constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        {key: '1', title: 'First'},
        {key: '2', title: 'Second'},
        {key: '3', title: 'Third'},
      ],
      scroll: new Animated.Value(0),
    };
  }

  _handleIndexChange = index => {
    this.setState({index});
  };

  _renderHeader = props => {
    // const translateY = this.state.scroll.interpolate({
    //   inputRange: [0, SCROLLABLE_HEIGHT],
    //   outputRange: [0, -SCROLLABLE_HEIGHT],
    //   extrapolate: 'clamp',
    // });

    return (
      <View style={[styles.header]}>
        {/*<TabBar {...props} style={styles.tabbar} />*/}
      </View>
    );
  };

  _renderScene = () => {
    return (
      <ContactsList
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: this.state.scroll}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: HEADER_HEIGHT}}
      />
    );
  };

  render() {
    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .32)',
  },
  cover: {
    height: HEADER_HEIGHT,
  },
  header: {
    height: 200,
    width: '100%',
    flex: 0,
    backgroundColor: '#477242',
  },
  tabbar: {
    backgroundColor: 'rgba(0, 0, 0, .32)',
    elevation: 0,
    shadowOpacity: 0,
  },
});
