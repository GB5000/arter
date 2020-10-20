import * as React from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import Header from "./Header";
import SpeciesItem from "./subcomponents/SpeciesItem";

export default class SpeciesBook extends React.Component {
    render() {

        //Array med hardcoded arter
        const species = [
            "Aborre",
            "Aftenfalk",
            "Dunet vejbred",
            "Egern",
            "Fiskehejre",
            "Gærdesmutte",
            "Harlekinmariehøne",
            "Hvepseedderkop ",
            "Lundsnegl",
            "Ræv",
            "Smalbladet brandbæger",
            "Ørnebregne",
        ];

        //Funktion hvori præsentationen af arterne hentes fra SpeciesItem.js samt SpeciesItem sættes
        const renderSpecies = ({item}) => (
            <SpeciesItem SpeciesItem={item}/>
            )

        //Arrayet species vises i en FlatList, hvori funktionen renderSpecies bruges
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title='Artsbogen'/>

                <Image style={styles.image} source={require('../assets/artsbogen.png')}></Image>

                <FlatList
                style={styles.flatlistDesign}
                data={species}
                renderItem={renderSpecies}
                keyExtractor={item => item}

                />

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
    image: {
        flex: 1,
        height: null,
        width: "100%",
        resizeMode: 'contain'

    },
    flatlistDesign: {
        height: 350

    }


});