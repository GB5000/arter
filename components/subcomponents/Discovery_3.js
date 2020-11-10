import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

let jsCode = ` 
    document.querySelector("#app > app-navbar > nav").style.display = 'none';
    document.querySelector("#app > app-sidebar > div").style.display = 'none';
    `;

const Discovery = () => (

    <View style={styles.container}>
        <WebView
            source={{ uri: 'https://arter.dk/observation/record-details/071f8a4c-b2c5-4bec-9a38-f684c23e6d11'}}
            javaScriptEnabled={true}
            injectedJavaScript={jsCode}
            originWhitelist={['https://*', 'https://arter.dk*']}

        />

    </View>
)

export default class Discovery_3 extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null,
        }
    }

    render() {

        return(
            <Discovery></Discovery>

        )
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,


    }
});


