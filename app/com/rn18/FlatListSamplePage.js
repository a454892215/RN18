// Hello World screen component
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
];
for (let i = 1; i <= 20; i++) {
  DATA.push({
    id: i + '',
    title: `Item ${i}`,
  });
}

const ItemView = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const wait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const fetchData = async () => {
  console.log('加载更多 size：' + DATA.length);
  await wait(200);
  for (let i = 1; i <= 10; i++) {
    DATA.push({
      id: DATA.length + i + '',
      title: `Item ${DATA.length + i}`,
    });
  }
};

const renderFooter = () => {
  // if (!loading) return null;

  return (
    <View style={{padding: 10}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const FlatListSamplePage = () => {
  return (
    /*   根节点的view高度自动填充满剩余空间*/
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <ItemView title={item.title} />}
        onEndReached={fetchData}
        ListFooterComponent={renderFooter}
        keyExtractor={(item, index) => {
          // console.debug('keyExtractor:' + index);
          return index + '';
        }}
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
