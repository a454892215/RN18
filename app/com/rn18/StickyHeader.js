import React from 'react';
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

  /**
   * React Native 的 SectionList 中没有 renderSectionHeader 的部分索引
   *
   * **/
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={dataList}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) =>
          section.id && section.id === -1 ? null : (
            <View style={[styles.header]}>
              <Text style={[styles.headerText]}>{section.title}</Text>
            </View>
          )
        }
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
