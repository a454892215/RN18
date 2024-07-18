import React, {createContext, useContext, useState} from 'react';
import {View, Text, Button} from 'react-native';

const CountContext = createContext();

const ChildComponent = () => {
  const {count} = useContext(CountContext);

  return (
    <View>
      <Text>createContext-useContext-useState:{count}</Text>
    </View>
  );
};

const UIUpdate3Context = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{count, setCount}}>
      <ChildComponent />
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </CountContext.Provider>
  );
};

export default UIUpdate3Context;
