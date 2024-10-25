import React, {Component} from 'react';
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
  return new Promise(resolve => setTimeout(resolve, 300));
};

// 模拟数据
const generateData = async (page = initPageIndex) => {
  await simulateNetworkRequest();
  const data = [];
  const perSize = 50;
  for (let i = 0; i < perSize; i++) {
    data.push(`Item ${page * perSize + i}`);
  }
  return data;
};

const initPageIndex = 0;
const itemHeight = 50;

class RefreshAndLoadMore_clz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
      loadingMore: false,
      page: initPageIndex,
    };
  }

  // 初始化数据
  async componentDidMount() {
    const initialData = await generateData(initPageIndex);
    this.setState({data: initialData});
  }

  // 下拉刷新
  onRefresh = async () => {
    this.setState({refreshing: true, page: initPageIndex});
    const newData = await generateData(initPageIndex);
    this.setState({data: newData, refreshing: false});
  };

  // 加载更多
  loadMoreData = async () => {
    if (this.state.loadingMore) return;
    this.setState({loadingMore: true});
    const nextPage = this.state.page + 1;
    const moreData = await generateData(nextPage);
    this.setState(prevState => ({
      data: [...prevState.data, ...moreData],
      loadingMore: false,
      page: nextPage,
    }));
  };

  getItemLayout = (data, index) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  });

  renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={this.renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
        getItemLayout={this.getItemLayout}
        onEndReached={this.loadMoreData}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: itemHeight,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default RefreshAndLoadMore_clz;
