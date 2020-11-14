import * as React from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import Header from "./Header";
import ContentView from "./subcomponents/ContentView";


export default class SpeciesBook extends React.Component {
    //komponenten viser ContentView fra ./subcomponents/ContentView
    //i ContentView hentes Artsbogen fra arter.dk
    render() {

        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>

                <ContentView/>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F1E7',
        flex: 1,
        justifyContent: 'center',

    },
});