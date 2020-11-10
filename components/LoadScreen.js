import * as React from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Text } from 'react-native';
import HomeScreen from "./HomeScreen";



//Funktion der fjerner den default navigation header i StackNavigator
export default class LoadScreen extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }





    //Hvis komponenten mounter, starter der en timer således at der navigeres videre til HomeScreen
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {

            this.props.navigation.navigate('HomeScreen');

        }, 3000);
    }

    // //Hvis komponenten ikke mounter, cleares timeren således at det ikke opstår problemer i den videre kørsel
    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo}source={require('../assets/Arter-Logo-POS.png')}></Image>
                </View>

                <Text style={styles.text}>Starter applikation</Text>

                <ActivityIndicator size='large' color='#20232A' style={{marginTop: 50}}/>
            </View>
        );
    };

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F1E7',
        padding: 20,
        height: '100%'

    },
    logoContainer: {
        height: 175,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        marginTop: 20,

    },
    logo: {
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 25

    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50
    }

});