import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');
const tabItemWidth = 80;
const tabs = [
  'Tab1',
  'Tab2',
  'Tab3',
  'Tab4',
  'Tab5',
  'Tab6',
  'Tab7',
  'Tab8',
  'Tab9',
  'TabA',
];

const MyTabView = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    const id = scrollX.addListener(({value}) => {
      console.log('scrollX：' + value);
    });
    return () => {
      scrollX.removeListener(id);
    };
  }, [scrollX]);

  // eslint-disable-next-line no-unused-vars
  const renderItem = ({item, index}) => (
    <View
      style={[
        styles.tabContent,
        {backgroundColor: index % 2 === 0 ? '#ffcccc' : '#3e67ad'},
      ]}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: 40,
              }}>
              {tabs.map((tab, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.tab}
                    onPress={() => {
                      flatListRef.current.scrollToIndex({
                        index,
                        animated: true,
                      });
                    }}>
                    <Text style={styles.tabText}>{tab}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Animated.View
              style={[
                styles.indicator,
                {
                  transform: [
                    {
                      translateX: scrollX.interpolate({
                        /**
                         * inputRange: 输入范围
                         * outputRange：输出范围
                         * 会根据输入范围自动映射输出范围
                         */
                        inputRange: [0, width * (tabs.length - 1)],
                        outputRange: [0, tabItemWidth * (tabs.length - 1)],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </ScrollView>
      </View>
      <FlatList
        ref={flatListRef}
        data={tabs}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  tab: {
    flex: 0,
    width: tabItemWidth,
    alignItems: 'center',
    backgroundColor: '#7fa087',
    justifyContent: 'center',
    paddingVertical: 0,
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: tabItemWidth,
    backgroundColor: 'blue',
  },
  tabContent: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTabView;
