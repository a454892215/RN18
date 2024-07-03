// Hello World screen component
import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

const TextSamplePage = () => {
  return (
    /*   根节点的view高度自动填充满剩余空间*/
    <View style={styles.container}>
      <Text style={styles.text}>这是一个普通的文本。</Text>
      <Text style={[styles.text, styles.bold]}>这是一个加粗的文本。</Text>
      <Text style={[styles.text, styles.italic]}>这是一个斜体的文本。</Text>
      <Text style={[styles.text, styles.underline]}>这是一个下划线文本。</Text>
      <Text style={[styles.text, styles.lineThrough]}>
        这是一个删除线文本。
      </Text>
      <Text style={[styles.text, styles.customFont]}>
        这是一个自定义字体的文本。
      </Text>
      <Text style={[styles.text, styles.colored]}>这是一个彩色的文本。</Text>
      <Text style={[styles.text, styles.uppercase]}>
        这是一个全部大写的文本:adfadfd。
      </Text>
      <Text style={[styles.text, styles.letterSpacing]}>
        这是一个字母间距较大的文本。
      </Text>
      <Text style={[styles.text, styles.numberOfLines]} numberOfLines={1}>
        这是一个超长文本，但是只显示一行内容。
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  customFont: {
    fontFamily: 'Cochin', // 替换为你需要的字体
  },
  colored: {
    color: 'blue',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  letterSpacing: {
    letterSpacing: 2,
  },
  numberOfLines: {
    width: '80%',
  },
});

export default TextSamplePage;
