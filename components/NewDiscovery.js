import * as React from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default class NewDiscovery extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }


    render() {
        return (


            <View style={styles.container}>


                <ImageBackground style={styles.backgroundImage} source={require('../assets/nyt_fund_v2.png')}>

                    <View>

                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SubmitNewDiscovery')}></TouchableOpacity >


                    </View>



                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',


    },
    backgroundImage: {
        width: null,
        height: '100%',
        flex: 1,
        resizeMode: "contain",
        justifyContent: 'center',
        marginTop: 0,
    },
    button: {
        borderColor: "black",
        backgroundColor : "transparent",
        marginLeft :135,
        marginRight:135,
        marginTop :550,
        width: 80,
        height: 80,
        borderRadius: 80/2
    }

});