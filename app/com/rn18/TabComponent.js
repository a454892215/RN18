import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window');

const tabs = ['Tab1', 'Tab2', 'Tab3', 'Tab4'];

const MyTabComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const renderItem = ({item, index}) => (
    <View style={styles.tabContent}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => {
              flatListRef.current.scrollToIndex({index, animated: true});
            }}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
        <Animated.View
          style={[
            styles.indicator,
            {
              transform: [
                {
                  translateX: scrollX.interpolate({
                    inputRange: [0, width],
                    outputRange: [0, width / tabs.length],
                  }),
                },
              ],
            },
          ]}
        />
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
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: width / tabs.length,
    backgroundColor: 'blue',
  },
  tabContent: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTabComponent;
