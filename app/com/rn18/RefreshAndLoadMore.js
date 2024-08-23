import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';

// 模拟网络请求的延迟
const simulateNetworkRequest = () => {
  return new Promise(resolve => setTimeout(resolve, 300)); // 模拟200毫秒的网络请求延迟
};

// 模拟数据
const generateData = async (page = initPageIndex) => {
  // 模拟网络请求
  await simulateNetworkRequest();
  const data = [];
  // 如果初始化数据不满一页 会自动触发加载更多
  for (let i = 0; i < 8; i++) {
    data.push(`Item ${page * 10 + i}`);
  }
  return data;
};

const initPageIndex = 0;
const RefreshAndLoadMore = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(initPageIndex);

  // 初始化数据
  useEffect(() => {
    // 使用自执行的异步函数来处理返回的Promise
    (async () => {
      const initialData = await generateData(initPageIndex);
      setData(initialData);
    })();
  }, []);

  // 下拉刷新
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(initPageIndex); // 重置页码
    const newData = await generateData(initPageIndex);
    setData(newData);
    setRefreshing(false);
  }, []);

  // 加载更多
  const loadMoreData = useCallback(async () => {
    if (loadingMore) return;
    console.log('==========loadMoreData============page:' + page);
    //  await simulateNetworkRequest();
    setLoadingMore(true);
    const nextPage = page + 1;
    setPage(nextPage);
    const moreData = await generateData(nextPage);
    setData(prevData => [...prevData, ...moreData]);
    setLoadingMore(false);
  }, [loadingMore, page]);

  // 渲染列表项
  const renderItem = useCallback(({item, index}) => {
    console.log('renderItem:' + index);
    return (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    );
  }, []);

  // 渲染加载更多的指示器
  const renderFooter = useCallback(() => {
    /**
     * 注意 因为复用机制，这里的page 在第一次执行后，就不会再变化了，即使此page更新了，这里也不会更新输出
     * 除非useCallback不再复用，才会更新
     */
    // console.log('==========renderFooter======page:' + page);
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={renderFooter}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReached={loadMoreData}
      // onEndReachedThreshold={0.5} // 设置触发加载更多的临界值
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default RefreshAndLoadMore;
