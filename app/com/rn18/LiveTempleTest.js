import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

class Page1 extends React.Component {
  static navigationOptions = {title: null};

  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let ls = [];
    return (
      <View>
        <FlatList
          // onEndReached={}
          onEndReachedThreshold={0.7}
          //  ListFooterComponent={}
          data={ls}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isRefreshing}
          showsVerticalScrollIndicator={false}
          renderItem={(item, position) => <View data={{item, position}} />}
          keyExtractor={(item, index) => index.toString()}
        />

        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.9}
          onPress={() => {}}>
          <Text style={{}}> </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});
export default Page1;
