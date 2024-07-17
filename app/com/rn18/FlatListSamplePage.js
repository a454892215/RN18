import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

const FlatListSamplePage = () => {
  const [data, setData] = useState([]);

  // 初始化数据， 传递的函数在组件首次渲染时候被调用
  useState(() => {
    const initialData = [];
    for (let i = 1; i <= 20; i++) {
      initialData.push({
        id: i.toString(),
        title: `Item ${i}`,
      });
    }
    setData(initialData);
  });

  // 模拟异步获取更多数据
  const fetchData = async () => {
    await wait(200); // 模拟异步加载延迟
    const newData = [];
    for (let i = data.length + 1; i <= data.length + 10; i++) {
      newData.push({
        id: i.toString(),
        title: `Item ${i}`,
      });
    }
    setData([...data, ...newData]); // 使用函数式更新状态
  };

  const wait = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const ItemView = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderFooter = () => {
    return (
      <View style={{padding: 10}}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemView title={item.title} />}
        onEndReached={fetchData}
        ListFooterComponent={renderFooter}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export default FlatListSamplePage;
