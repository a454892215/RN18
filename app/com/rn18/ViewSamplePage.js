// Hello World screen component
import {Text, View} from 'react-native';
import React from 'react';

const ViewSamplePage = () => {
  function getView(text, index) {
    return (
      <View
        key={index}
        style={{
          height: 30,
          width: 30,
          backgroundColor: '#ff0000',
          flex: 0,
          margin: 5,
          justifyContent: 'center', // 垂直居中
          alignItems: 'center', // 水平居中
        }}>
        <Text>
          {text}:{index}
        </Text>
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
        flex: 1,
        // width: 200,
        backgroundColor: '#ffFF00',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Text>类似安卓水平包裹内容的LinearLayout布局：</Text>

      <View
        style={{
          /*不设置宽高 则自动包裹内容*/
          backgroundColor: '#ffcccc',
          // padding: 10,
          /**
           flex  为0的时候包裹内容， 这个时候可以设置宽高，最外层除外
           * */
          flex: 0,
          width: 250,
          height: 80,
          marginBottom: 3,
          flexDirection: 'row',
          /**
          * justifyContent 是用于控制子组件在父容器（flex 容器）中沿主轴方向的对齐方式的属性。主轴的方向取决于父容器的 flexDirection 属性设置（默认为 column）。
          可用的 justifyContent 属性值：
          flex-start:默认值。子组件向主轴起始位置对齐。
          flex-end: 子组件向主轴末尾位置对齐。
          center:子组件在主轴上居中对齐。
          space-between: 在父容器内均匀分布子组件，首个子组件位于起始位置，末尾子组件位于末尾位置，中间子组件等距分布。
          space-around: 在父容器内均匀分布子组件，并在每个子组件周围创建相同的空间。
          space-evenly: 在父容器内均匀分布子组件，包括父容器的起始和末尾边缘。
          */
          justifyContent: 'flex-end',
          /**
             alignItems 属性用于控制子组件在父容器（flex 容器）的交叉轴（与主轴垂直的轴）上的对齐方式。
             交叉轴的方向取决于父容器的 flexDirection 属性设置（默认为 column）。

             可用的 alignItems 属性值：
             flex-start: 默认值。子组件向交叉轴起始位置对齐。
             flex-end: 子组件向交叉轴末尾位置对齐。
             center: 子组件在交叉轴上居中对齐。
             stretch: 子组件被拉伸以填充父容器在交叉轴上的空间。（默认行为）
             baseline: 子组件根据其文本基线对齐。
             * */
          alignItems: 'flex-end',
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
