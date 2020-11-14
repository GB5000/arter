import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

//Linket til arten Vild kørvel hentes fra Arter.dk og injectes som javaScript i Discovery
//Nedenstående elementer fjernes fra siden, så den præsenteres flottere i appen
let jsCode = ` 
    document.querySelector("#app > app-navbar > nav").style.display = 'none';
    document.querySelector("#app > app-sidebar > div").style.display = 'none';
    `;

//react-native-webview bruges til at arten Vild kørvel fra arter.dk
//Discovery kaldes længere nede i komponenten
const Discovery = () => (

    <View style={styles.container}>
        <WebView
            source={{ uri: 'https://arter.dk/observation/record-details/c46cd289-1f49-41c3-849e-3f7f87fb61ac'}}
            javaScriptEnabled={true}
            injectedJavaScript={jsCode}
            originWhitelist={['https://*', 'https://arter.dk*']}

        />

    </View>
)

export default class Discovery_1 extends Component{
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


