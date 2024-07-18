import React from 'react';
import {View, Text, SectionList, StyleSheet, SafeAreaView} from 'react-native';

const StickyHeader = () => {
  const dataList = [
    {
      title: 'Section 1',
      data: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
      ],
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
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={dataList}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
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
  header: {
    backgroundColor: '#437429',
    padding: 20,
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
