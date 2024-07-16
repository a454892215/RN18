// LeftDrawerContent.js
import React from 'react';
import {View, Text, Button} from 'react-native';

const LeftDrawerContent = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Left Drawer Content</Text>
      <Button title="Close" onPress={() => navigation.closeDrawer()} />
    </View>
  );
};

export default LeftDrawerContent;
