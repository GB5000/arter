import * as React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, Button, TouchableOpacity,Alert } from 'react-native';
import Header from "./Header";
import Constants from 'expo-constants';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Accuracy} from "expo-location";




export default class HomeScreen_v2 extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null,
        }
    }


    mapViewRef = React.createRef();

    //states der bruges til at undersøge om tilladelse til brug af placering og
    //hvad den nuværende placering er
    state = {
        hasLocationPermission: null,
        currentLocation: null,
        items: [],
    };

    //metode der via expo-permissions spørger tilladelse til brug af placering
    getLocationPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({ hasLocationPermission: status });
    };

    //Komponenten (HomeScreen) mounter først efter tilladelsen er givet
    componentDidMount = async () => {
        await this.getLocationPermission();
        this.fetchData();

    };



    fetchData = async() => {
        fetch('https://arpo-prod-api-app.azurewebsites.net/records/?searchText=&take=200&zoomLevel=7&mapBounds=3.142074546874998&mapBounds=54.023217176162376&mapBounds=18.105453453124998&mapBounds=57.57709512782503&speciesGroups=Fugle&searchMode=3&includeDescendantTaxons=true&isDeleted=&hasMedia=false&excludeSaughtButNotFound=true&includeSpeciesGroupFacet=true&includeOrphanRecords=false&url=')
            .then(res => res.json())
            .then(data => {
                this.setState({ items: data.items })
            })
            .catch(console.error)
    }


    getIconFromType(acceptedVernacularName) {
        var icon = require("../assets/green-marker-black.png");
        switch (acceptedVernacularName) {
            case "Havørn": icon = require("../assets/sea-​​eagle.png");
                break
            case "Hjejle": icon = require("../assets/GoldenPlover.png");
                break
            case "Ringdue": icon = require("../assets/pigeon.png");
                break
            case "Solsort": icon = require("../assets/Blackbird.png");
                break
            case "Rødhals, Rødkælk": icon = require("../assets/Erithacus-rubecula.png");
                break
            case "Fiskehejre": icon = require("../assets/Ardea-cinerea.png");
                break
            case "Musvåge": icon = require("../assets/Buteo-buteo.png");
                break
            case "Fasan": icon = require("../assets/Phasianus-colchicus.png");
                break
            case "Gærdesmutte": icon = require("../assets/wren.png")
                break
            default: icon = require("../assets/green-marker-black.png");
                break

        }
        return icon
    }



    mapMarkers = () => {
        return this.state.items.map((item) => <Marker
            key={item.id}
            coordinate={{ latitude: item.geoLocation.latitude, longitude: item.geoLocation.longitude }}
            title={item.acceptedVernacularName}
            description={item.scientificName}
        >
            <Image source={this.getIconFromType(item.acceptedVernacularName)} resizeMode={'contain'} style={{ height: 30, width: 30 }} />

        </Marker >)


    }



    //Metode der kan bruges til at opdatere brugerens placering
    updateLocation = async () => {
        const { coords } = await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced});
        this.setState({ currentLocation: coords });


    };

    //Metode der render brugens nuværende placering
    renderCurrentLocation = () => {
        const { hasLocationPermission, currentLocation } = this.state;
        if (hasLocationPermission === null) {
            return null;
        }
        if (hasLocationPermission === false) {
            return <Text>Der er ikke givet tilladelse til brug af enhedens placering</Text>;
        }

    };

    //Header renders, MapView med fetched markers vises på kortet
    render() {
        const {
        } = this.state;
        return (

            <SafeAreaView style={styles.container}>
                <Header navigation={this.props.navigation} title='Fund på Arter'/>

                {this.renderCurrentLocation()}
                <MapView
                    provider="google"
                    style={styles.map}
                    ref={this.mapViewRef}
                    showsUserLocation
                    initialRegion={{
                        latitude: 55.6518904,
                        longitude: 12.5047675,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>

                    {this.mapMarkers()}




                </MapView>


            </SafeAreaView>





        )

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    map: { flex: 1 },
    infoBox: {
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {
        fontSize: 20,
    },
});
