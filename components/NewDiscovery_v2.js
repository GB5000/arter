import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';





//Funktion der fjerner den default navigation header i StackNavigator
export default class NewDiscovery_v2 extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null
        }
    }

    //Der bryges Expos image-picker til at åbne telefonens kamera og billedbibliotek
    //Derudover hentes der ikoner fra expo/vector-icons der illustrerer ovenstående funktioner
    render() {
        return (



            <View style={styles.container}>


                <Text style={styles.textUpper}>Her kan du indsende et nyt fund:</Text>

                <View style={styles.containerInside}>

                    <TouchableOpacity
                        style={styles.touchableOpacity_button}
                        onPress={() => ImagePicker.launchCameraAsync({

                        })}>

                        <View style={styles.button_1}>

                            <MaterialIcons name="camera" size={45} color="#143D1D" style={styles.img}/>

                            <Text style={styles.text_1}>Tag billede</Text>

                        </View>
                    </TouchableOpacity>


                    <View style={styles.containerInsideWrapper}></View>

                    <TouchableOpacity
                        style={styles.touchableOpacity_button}
                        onPress={() => ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.All,
                            quality: 1,
                        })
                        }>
                        <View style={styles.button_1}>

                            <MaterialCommunityIcons name="camera-image" size={45} color="#143D1D" style={styles.img}/>

                            <Text style={styles.text_2}>Vælg billede</Text>

                        </View>
                    </TouchableOpacity>

                </View>

            </View>


        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F9F1E7',
        alignItems: 'center',

    },
    containerInside: {
        paddingTop: 30,

    },
    containerInsideWrapper: {
        paddingTop: 60,

    },
    button_1: {
        borderColor: "black",
        backgroundColor : "transparent",
        width: 80,
        height: 80,
        borderRadius: 80/2,
        paddingTop: 20,
        borderWidth: 2,

    },
    touchableOpacity_button: {
        borderColor: "transparent",
        backgroundColor : "transparent",
        width: 80,
        height: 80,
        borderRadius: 80/2,
        borderWidth: 2,
    },
    textUpper: {
        fontSize: 20,



    },
    text_1: {
        color: "black",
        paddingTop: 20,

    },
    text_2: {
        color: "black",
        paddingTop: 20,
        left: 20

    },
    img: {
        overflow: 'hidden',
        alignItems: 'center',
        left: 16,
        marginTop: -5

    }
});

