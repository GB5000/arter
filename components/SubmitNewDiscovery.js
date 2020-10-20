import * as React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import HomeScreen from "./HomeScreen";

//Funktion der fjerner den default navigation header i StackNavigator
export default class SubmitNewDiscovery extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null,

        }
    }

    //Funktion der handler på renders TouchableOpacity Button
    //Ved OnPress åbnes der en Alert Box, hvori handleNavigate aktiveres hvis der klikkes OK
    handleOnPress = () => {
        Alert.alert("Dit fund er nu indsendt!", "Tak for dit bidrag", [
                {
                    text: "OK",
                    onPress: () => this.handleNavigate()
                },
            ],
            {
                cancelable: false
            }
        );
    }

    //Handler navigationen i Alert Box, der navigeres til HomeScreen
    handleNavigate() {
        this.props.navigation.navigate('HomeScreen')
        console.log("Fund indsendt")
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.submitArea}>

                    <Text style={{color: '#fff', fontSize: 20}}>Artsgruppe:</Text>

                    <TextInput style={styles.textInputStyle}>Øverige dyr</TextInput>

                    <Text style={{color: '#fff', fontSize: 20}}>Navn:</Text>

                    <TextInput style={styles.textInputStyle1} >Vinbjergsnegl</TextInput>


                   <View style={styles.imageContainer}>

                       <Image style={styles.submitImage} source={require('../assets/original_v3.png')}></Image>

                   </View>


                    <TouchableOpacity style={styles.button}>
                    <Button
                        title="Indsend fund"
                        color="black"
                        onPress={this.handleOnPress}/>

                    </TouchableOpacity>


                </View>

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
    submitArea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#133C1C',
        height: "90%",
        width: "80%",
        justifyContent: 'space-around',
        color: '#fff',
        flexWrap: 'wrap',
        padding: 5,

    },
    textInputStyle: {
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        color: '#fff',
        fontSize: 20,
        width: "50%",
        textAlign: 'center',


    },
    textInputStyle1: {
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        color: '#fff',
        fontSize: 20,
        width: "50%",
        textAlign: 'center',
        marginLeft: 53,
        marginTop: 25,


    },
    button: {
        width: "50%",
        height: 150,
        marginTop: 50,
        textAlign: 'center'


    },
    imageContainer: {
        marginTop: 100,
        width: "80%",
        height: 200,
        borderWidth: 1,
        borderColor: "black",


    },
    submitImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'


    }
});