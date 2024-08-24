import React, {useRef} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const data = Array.from({length: 10}, (_, i) => `Page ${i + 1}`);
const innerData = Array.from({length: 20}, (_, i) => `Item ${i + 1}`);

const ApiTestPage = () => {
  const outerScrollViewRef = useRef(null);
  //  const innerScrollViewRef = useRef([]);

  const renderInnerContent = index => {
    return (
      <>
        {innerData.map((item, idx) => (
          <View key={idx} style={styles.innerItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </>
    );
  };

  const renderPage = ({item, index}) => {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>{item}</Text>
        {renderInnerContent(index)}
      </View>
    );
  };

  return (
    <FlatList
      ref={outerScrollViewRef}
      data={data}
      renderItem={renderPage}
      keyExtractor={(item, index) => index.toString()}
      // pagingEnabled
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      onScrollEndDrag={e => {
        // 手指松开时检查是否需要锁定或解锁外层 FlatList 的滚动
        outerScrollViewRef.current.setNativeProps({
          scrollEnabled: true,
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  page: {
    height: height,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  innerScrollView: {
    height: height - 100, // 留出一定空间以便外层 FlatList 显示标题等内容
  },
  innerItem: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ApiTestPage;
