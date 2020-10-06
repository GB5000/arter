import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class SubmitNewDiscovery extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
                <Text>lol</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F1E7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

});