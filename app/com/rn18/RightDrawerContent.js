// RightDrawerContent.js
import React from 'react';
import {View, Text, Button} from 'react-native';

const RightDrawerContent = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Right Drawer Content</Text>
      <Button title="Close" onPress={() => navigation.closeDrawer()} />
    </View>
  );
};

export default RightDrawerContent;
