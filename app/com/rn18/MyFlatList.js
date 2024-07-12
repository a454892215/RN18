import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

const MyFlatList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      // 假设我们每页加载 20 个项目
      const response = await fetch(
        `https://api.example.com/data?page=${page}&limit=20`,
      );
      const newData = await response.json();

      setData(prevData => [...prevData, ...newData]);
      setPage(prevPage => prevPage + 1);
      if (newData.length < 20) {
        setHasMore(false); // 如果加载的数据少于 20 个，表示没有更多数据了
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={{padding: 10}}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Text>{item.title}</Text>}
      onEndReached={fetchData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

export default MyFlatList;
