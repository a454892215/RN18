import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends Component {
  static defaultProps = {
    text: '按钮',
    textColor: 'white',
    textSize: 13,
    backgroundColor: '#cccccc',
    onPress: () => {
      console.log('===ccc===');
    },
  };

  static propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
  };

  render() {
    const {text, textColor, textSize, onPress, backgroundColor} = this.props;
    return (
      <TouchableOpacity
        style={[styles.content, {backgroundColor: backgroundColor}]}
        onPress={onPress}>
        <Text style={[{color: textColor, fontSize: textSize}]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
  },
  button: {},
});

export default MyButton;
