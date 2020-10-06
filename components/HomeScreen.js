import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';




export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.bg} source={require('../assets/fund_v2.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F1E7',
        flex: 1,

    },
    bg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
});