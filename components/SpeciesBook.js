import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Header from "./Header";

export default class SpeciesBook extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title='Artsbogen'/>

                <Text>Test</Text>

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