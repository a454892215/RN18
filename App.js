/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HelloWorldScreen from './app/com/rn18/HomePage';
import ViewSamplePage from './app/com/rn18/ViewSamplePage';
import TextSamplePage from './app/com/rn18/TextSamplePage';
import FlatListSamplePage from './app/com/rn18/FlatListSamplePage';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = false;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: '#52872d',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// 创建一个堆栈导航器
const Stack = createStackNavigator();
const appNavigation = null;
// 主应用组件
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HelloWorldPage" component={HelloWorldScreen} />
        <Stack.Screen name="ViewSamplePage" component={ViewSamplePage} />
        <Stack.Screen name="TextSamplePage" component={TextSamplePage} />
        {/* eslint-disable-next-line no-undef */}
        <Stack.Screen
          name="FlatListSamplePage"
          component={FlatListSamplePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <Button
          title="跳到API示例页面1"
          color="#ff0000"
          onPress={() => navigation.navigate('HelloWorldPage')}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            color="#cccccc"
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />

          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

let style2 = StyleSheet.create({
  btn: {color: 'red'},
});
