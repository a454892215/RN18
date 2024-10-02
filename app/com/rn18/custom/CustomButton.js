import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

class CustomButton extends Component {
  static defaultProps = {
    title: '点击我',
    color: 'blue',
    onPress: () => {
      console.log('===ccc===');
    },
  };

  static propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
  };

  render() {
    const {title, color, onPress} = this.props;
    return (
      <View
        style={{
          backgroundColor: '#ff0000',
          justifyContent: 'center', // 垂直居中
          alignItems: 'center', // 水平居中
        }}>
        <Text style={{fontSize: 16, color: '#ff0000'}}>你好</Text>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: color}]}
          onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;
