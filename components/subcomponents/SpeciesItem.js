import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class SpeciesItem extends Component{
    render() {
        const{SpeciesItem} = this.props
        return(
            <View style={styles.container}>

                <TouchableOpacity>

                    <View style={styles.speciesContainer}>

                        <View style={styles.speciesContainerImage}>

                            <Text>Billede</Text>

                        </View>

                        <Text style={styles.speciesContainerText}>
                            {SpeciesItem}
                        </Text>

                    </View>

                </TouchableOpacity>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F1E7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,

    },
    speciesContainer: {
        backgroundColor: '#fff',
        width: "100%",
        height: 80,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 30,
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,

    },
    speciesContainerText: {
        fontSize: 17,
        textAlign: 'center',
        width: "50%",
        marginTop: 35,
    },
    speciesContainerImage: {
        width: "30%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',

    }

});