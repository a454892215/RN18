import React, {useRef} from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import PagerView from 'react-native-pager-view';

const {height} = Dimensions.get('window');

const HorizontalPagerViewS = () => {
  const pagerViewRef = useRef(null);

  const goToPage = pageIndex => {
    if (pagerViewRef.current) {
      pagerViewRef.current.setPage(pageIndex);
    }
  };

  return (
    <PagerView
      ref={pagerViewRef}
      style={styles.pagerView}
      orientation="horizontal">
      <View key="1" style={[styles.page, {backgroundColor: '#23367f'}]}>
        <Text style={styles.text}>第一页</Text>
        <Button title="Go to Page 2" onPress={() => goToPage(1)} />
      </View>
      <View key="2" style={[styles.page, {backgroundColor: '#ffff00'}]}>
        <Text style={styles.text}>第二页</Text>
        <Button title="Go to Page 1" onPress={() => goToPage(0)} />
      </View>
      <View key="3" style={[styles.page, {backgroundColor: '#50a54d'}]}>
        <Text style={styles.text}>第三页</Text>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height, // 设置页面的高度为屏幕的高度
  },
  text: {
    fontSize: 24,
  },
});

export default HorizontalPagerViewS;
