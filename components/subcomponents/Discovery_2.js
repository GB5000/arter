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
            source={{ uri: 'https://arter.dk/observation/record-details/b9d1ecbe-2ed0-47de-b007-5e7459593347'}}
            javaScriptEnabled={true}
            injectedJavaScript={jsCode}
            originWhitelist={['https://*', 'https://arter.dk*']}

        />

    </View>
)

export default class Discovery_2 extends Component{
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


