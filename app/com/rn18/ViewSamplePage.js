// Hello World screen component
import {Text, View} from 'react-native';
import React from 'react';

const ViewSamplePage = () => {
  function getView(text, index) {
    return (
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: '#ff0000',
          flex: 0,
          marginBottom: 3,
          justifyContent: 'center', // 垂直居中
          alignItems: 'center', // 水平居中
        }}>
        <Text>{text}</Text>
      </View>
    );
  }

  function getViewArr() {
    const data = ['It', 'It', 'It'];
    const renderedItems = [];

    // 使用 forEach 方法遍历数组，并向 renderedItems 数组添加组件
    data.forEach((item, index) => {
      renderedItems.push(getView(item, index));
    });
    return renderedItems;
  }

  return (
    /*   根节点的view高度自动填充满剩余空间*/
    <View
      style={{
        flex: 0.6,
        width: 200,
        backgroundColor: '#ffFF00',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 10,
      }}>
      <View
        style={{
          /*不设置宽高 则自动包裹内容*/
          backgroundColor: '#40a14a',
          padding: 10,
          flex: 0,
          marginBottom: 3,
          flexDirection: 'row',
          justifyContent: 'center', // 垂直居中
          alignItems: 'center', // 水平居中
        }}>
        {getViewArr()}
      </View>

      <View
        style={{
          /*不设置宽高 则自动包裹内容*/
          backgroundColor: '#40a14a',
          padding: 10,
          flex: 0,
          marginBottom: 3,
          flexDirection: 'column',
          justifyContent: 'center', // 垂直居中
          alignItems: 'center', // 水平居中
        }}>
        {getViewArr()}
      </View>

      {/*按比例分配父窗体空间*/}
      <View
        style={{
          /*不设置宽高 则自动包裹内容*/
          backgroundColor: '#40a14a',
          padding: 10,
          flex: 0,
          marginBottom: 3,
          flexDirection: 'row',
          justifyContent: 'center', // 垂直居中
          alignItems: 'center', // 水平居中
        }}>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#ff0000',
            flex: 3,
          }}
        />

        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#2256a5',
            flex: 4,
          }}
        />
      </View>
    </View>
  );
};
export default ViewSamplePage;
