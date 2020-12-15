import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

    //https://arter.dk/search/taxon injectes som javaScript
    //Nedenstående elementer fjernes fra siden, så den præsenteres flottere i appen
    let jsCode = ` 
    document.querySelector("#app > app-navbar > nav").style.display = 'none';
    document.querySelector("#app > app-sidebar > div").style.display = 'none';
    `;

    //react-native-webview bruges til at hente Artsbogen fra arter.dk
    //ContentView kaldes i SpeciesBook_v2
    const ContentView = () => (

        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://arter.dk/search/taxon?take=15&skip=0&notMatched=false&speciesGroup=Fugle&isDkTaxon=true&isDefaultTaxon=true&isMissingPhoto=false&searchText='}}
                javaScriptEnabled={true}
                injectedJavaScript={jsCode}
                originWhitelist={['https://*', 'https://arter.dk*']}

            />

        </View>
    )

    const styles = StyleSheet.create( {
        container: {
            flex: 1
        }
    });

    export default ContentView;

