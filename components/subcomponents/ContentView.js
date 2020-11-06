import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

    let jsCode = ` 
    document.querySelector("#app > app-navbar > nav").style.display = 'none';
    document.querySelector("#app > app-sidebar > div").style.display = 'none';
    `;

    const ContentView = () => (

        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://arter.dk/search/taxon'}}
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

