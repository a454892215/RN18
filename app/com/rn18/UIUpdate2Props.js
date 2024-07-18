import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const ChildComponent = ({count}) => (
  <View>
    <Text>useState-Props: {count}</Text>
  </View>
);

const UIUpdate2Props = () => {
  const [count, setCount] = useState(0);

  return (
    // 父组件可以通过 props 将数据传递给子组件。当 props 发生变化时，子组件会重新渲染。
    <View>
      <ChildComponent count={count} />
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UIUpdate2Props;
