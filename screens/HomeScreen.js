import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView
} from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Text>Hello Ran!</Text>
        </SafeAreaView>
    );
}

HomeScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
