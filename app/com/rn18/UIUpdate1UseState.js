import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const UpUpdate1UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>useState: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UpUpdate1UseState;
