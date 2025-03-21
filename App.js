/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Toast from 'react-native-toast-message';
import {
  Alert,
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
import HelloWorldScreen from './app/com/rn18/HelloWorldScreen';
import ViewSamplePage from './app/com/rn18/ViewSamplePage';
import TextSamplePage from './app/com/rn18/TextSamplePage';
import FlatListSamplePage from './app/com/rn18/FlatListSamplePage';
import TabViewExample from './app/com/rn18/TabViewSample';

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import SlideInModal from './app/com/rn18/SlideInModal';
import ExpandableViewSample from './app/com/rn18/ViewHeightAnimation';
import UpUpdate1UseState from './app/com/rn18/UIUpdate1UseState';
import UIUpdate2Props from './app/com/rn18/UIUpdate2Props';
import UIUpdate3Context from './app/com/rn18/UIUpdate3Context';
import StickyHeader from './app/com/rn18/StickyHeader';

import VerticalPagerViewS from './app/com/rn18/VerticalPagerViewSamplePage';
import HorizontalPagerViewS from './app/com/rn18/HorizontalPagerViewSamplePage';
import MyTabView from './app/com/rn18/MyCustomedTabView';
import RnInvokeAndroid1 from './app/com/rn18/RnInvokeAndroid1';
import Anim1Scale from './app/com/rn18/Anim1Scale';
import Anim2Translation from './app/com/rn18/Anim2Translation';
import Anim3Rotate from './app/com/rn18/Anim3Rotate';
import Anim4Color from './app/com/rn18/Anim4Color';
import Anim5Spring from './app/com/rn18/Anim5Spring';
import Anim6Composite from './app/com/rn18/Anim6Compose';
import RefreshAndLoadMore from './app/com/rn18/RefreshAndLoadMore';
import ApiTestPage from './app/com/rn18/ApiTestPage';
import ViewSample2 from './app/com/rn18/ViewSample2';
import CustomButton from './app/com/rn18/custom/CustomButton';
import InputSample from './app/com/rn18/InputSample';
import MyButton from './app/com/rn18/custom/MyButton';
import CustomDrawerTest from './app/com/rn18/CustomDrawerTest';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScrollViewStickyPage from "./app/com/rn18/ScrollViewStickyPage";

// import {createDrawerNavigator} from '@react-navigation/drawer';

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
// const Drawer = createDrawerNavigator();

// const LeftDrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       drawerPosition="left"
//       drawerContent={props => <LeftDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       {/* Add other screens as needed */}
//     </Drawer.Navigator>
//   );
// };

// const RightDrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       drawerPosition="right"
//       drawerContent={props => <RightDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       {/* Add other screens as needed */}
//     </Drawer.Navigator>
//   );
// };

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HelloWorldPage" component={HelloWorldScreen} />
          <Stack.Screen name="ViewSamplePage" component={ViewSamplePage} />
          <Stack.Screen name="TextSamplePage" component={TextSamplePage} />
          <Stack.Screen name="TabViewExample" component={TabViewExample} />
          <Stack.Screen name="SlideInModal" component={SlideInModal} />
          <Stack.Screen
            name="UpUpdate1UseState"
            component={UpUpdate1UseState}
          />
          <Stack.Screen name="UIUpdate2Props" component={UIUpdate2Props} />
          <Stack.Screen name="UIUpdate3Context" component={UIUpdate3Context} />
          <Stack.Screen name="StickyHeader" component={StickyHeader} />
          <Stack.Screen name="MyTabComponent" component={MyTabView} />
          <Stack.Screen
            name="HorizontalPagerViewS"
            component={HorizontalPagerViewS}
          />
          <Stack.Screen
            name="VerticalPagerViewS"
            component={VerticalPagerViewS}
          />
          <Stack.Screen
            name="ExpandableViewSample"
            component={ExpandableViewSample}
          />
          {/* eslint-disable-next-line no-undef */}
          <Stack.Screen
            name="FlatListSamplePage"
            component={FlatListSamplePage}
          />

          <Stack.Screen name="RnInvokeAndroid1" component={RnInvokeAndroid1} />
          <Stack.Screen name="Anim1Scale" component={Anim1Scale} />
          <Stack.Screen name="Anim2Translation" component={Anim2Translation} />
          <Stack.Screen name="Anim3Rotate" component={Anim3Rotate} />
          <Stack.Screen name="Anim4Color" component={Anim4Color} />
          <Stack.Screen name="Anim5Spring" component={Anim5Spring} />
          <Stack.Screen name="Anim6Composite" component={Anim6Composite} />
          <Stack.Screen name="ViewSample2" component={ViewSample2} />
          <Stack.Screen name="InputSample" component={InputSample} />
          <Stack.Screen name="CustomDrawerTest" component={CustomDrawerTest} />
          <Stack.Screen
            name="CustomButton"
            component={CustomButton}
            initialParams={{
              title: '点击我aaa',
              color: 'blue',
            }}
          />
          <Stack.Screen name="ScrollViewStickyPage" component={ScrollViewStickyPage} />
          <Stack.Screen name="ApiTestPage" component={ApiTestPage} />
          <Stack.Screen
            name="RefreshAndLoadMore"
            component={RefreshAndLoadMore}
          />
        </Stack.Navigator>
        {/*<Stack.Navigator*/}
        {/*  initialRouteName="LeftDrawerNavigator"*/}
        {/*  screenOptions={{headerShown: false}}>*/}
        {/*  <Stack.Screen*/}
        {/*    name="LeftDrawerNavigator"*/}
        {/*    component={LeftDrawerNavigator}*/}
        {/*  />*/}
        {/*  <Stack.Screen*/}
        {/*    name="RightDrawerNavigator"*/}
        {/*    component={RightDrawerNavigator}*/}
        {/*  />*/}
        {/*</Stack.Navigator>*/}
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <MyButton
          text="跳到API示例页面1"
          onPress={() => navigation.navigate('HelloWorldPage')}
        />
        <View style={{height: 5}} />
        <MyButton
          text="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
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
    </SafeAreaProvider>
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

// eslint-disable-next-line no-unused-vars
let style2 = StyleSheet.create({
  btn: {color: 'red'},
});
