import React, { Component } from 'react';
import { Animated, ScrollView, View, Text, StyleSheet } from 'react-native';

class ScrollViewStickyPage extends Component {
    constructor(props) {
        super(props);
        this.scrollY = new Animated.Value(0);
        this.state = {
            isSticky: false,
        };
    }

    componentDidMount() {
        this.scrollListener = this.scrollY.addListener(({ value }) => {
            if (value >= 60 && !this.state.isSticky) {
                this.setState({ isSticky: true });
            } else if (value < 60 && this.state.isSticky) {
                this.setState({ isSticky: false });
            }
        });
    }

    componentWillUnmount() {
        this.scrollY.removeListener(this.scrollListener);
    }

    render() {
        const { isSticky } = this.state;

        return (
            <View style={styles.container}>
                {/* 悬浮组件（当 isSticky 为 true 时放到 ScrollView 外部） */}
                {isSticky && (
                    <View style={[styles.stickyComponent, styles.fixed]}>
                        <Text>我是悬浮组件</Text>
                    </View>
                )}

                <Animated.ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={1}
                >
                    <View style={styles.placeholder} />

                    {/* ScrollView 内部的悬浮组件 (只在 isSticky 为 false 时显示) */}
                    <View style={styles.stickyComponent}>
                        <Text>我是悬浮组件</Text>
                    </View>

                    <View style={styles.content}>
                        <Text>大量内容区域...</Text>
                        <Text>继续滚动更多内容...</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>大量内容区域11...</Text>
                        <Text>继续滚动更多内容...</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>大量内容区域22...</Text>
                        <Text>继续滚动更多内容...</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>大量内容区域33...</Text>
                        <Text>继续滚动更多内容...</Text>
                    </View>
                </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    placeholder: {
        height: 60,
        backgroundColor: '#75c447',
    },
    stickyComponent: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    fixed: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 10,
    },
    content: {
        height: 300,
        backgroundColor: '#bb6060',
    },
});

export default ScrollViewStickyPage;
