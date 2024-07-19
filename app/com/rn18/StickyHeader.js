import React, {useCallback} from 'react';
import {View, Text, SectionList, StyleSheet, SafeAreaView} from 'react-native';
// StickyHeader 效果，隐藏第一个头部可以变成吸顶效果
const StickyHeader = () => {
  const dataList = [
    {
      id: -1,
      title: 'Section 2',
      data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    },
    {
      title: 'Section 2',
      data: [
        'Item 11',
        'Item 12',
        'Item 13',
        'Item 14',
        'Item 15',
        'Item 16',
        'Item 17',
        'Item 18',
        'Item 19',
        'Item 20',
      ],
    },
    {
      title: 'Section 3',
      data: [
        'Item 21',
        'Item 22',
        'Item 23',
        'Item 24',
        'Item 25',
        'Item 26',
        'Item 27',
        'Item 28',
        'Item 29',
        'Item 30',
      ],
    },
    {
      title: 'Section 4',
      data: [
        'Item 212',
        'Item 221',
        'Item 231',
        'Item 241',
        'Item 251',
        'Item 261',
        'Item 271',
        'Item 281',
        'Item 291',
        'Item 301',
      ],
    },
  ];

  const ketExtract = (item, index) => item + index;
  /***
     * 减少匿名函数的使用：
     将 renderItem 和 renderSectionHeader 提取出来，避免每次渲染时都创建新的匿名函数。
     * @param item
     * @param index
     * @returns {*}
     */
  const renderItem = ({item, index}) => {
    console.log('renderItem index:' + index);
    return <Text style={styles.item}>{item}</Text>;
  };

  /**
     * React Native 的 SectionList 中没有 renderSectionHeader 的部分索引
     * useCallback 是一个 React Hook，主要用于缓存回调函数，以防止在组件重新渲染时
     * 生成新的函数实例，从而优化性能。它特别适用于传递给子组件的函数，以避免子组件不必要的重新渲染。
     * useCallback 接受两个参数：
     回调函数：需要缓存的函数。
     依赖数组：函数依赖的变量数组。当数组中的任意一个变量发生变化时，函数会被重新创建。
     优化性能的注意事项
     仅在必要时使用：只有在函数会导致性能问题时才使用 useCallback。不必要的使用会增加代码的复杂性而没有明显的性能收益。
     依赖数组：确保依赖数组包含所有外部使用的变量，否则会导致错误的缓存行为。
     * **/

  const renderHeader = useCallback(
    ({section}) =>
      section.id && section.id === -1 ? null : (
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>{section.title}</Text>
        </View>
      ),
    [],
  );

  /**
     * 要优化这段 React Native 代码，可以从以下几个方面入手：
     避免无谓的重新渲染：
     确保 keyExtractor 使用唯一且稳定的键。
     使用 React.memo 或类似的优化方法来避免不必要的组件重新渲染。
     减少匿名函数的使用：
     将 renderItem 和 renderSectionHeader 提取出来，避免每次渲染时都创建新的匿名函数。
     适当使用 memoization：
     使用 useMemo 或 useCallback 来缓存函数和计算结果。
     优化样式：
     确保样式对象不在每次渲染时重新创建，建议将样式放在 StyleSheet.create 中定义。
     */
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={dataList}
        keyExtractor={ketExtract}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        stickySectionHeadersEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  firstHeader: {
    flex: 0,
    height: 0,
    backgroundColor: '#d5b84e',
  },
  header: {
    backgroundColor: '#437429',
    padding: 20,
  },
  firstHeaderText: {
    fontSize: 0,
    height: 0,
    opacity: 0,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default StickyHeader;
