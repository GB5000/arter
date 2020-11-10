import * as React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Header from "./Header";
import Constants from 'expo-constants';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Accuracy} from "expo-location";
import Discovery_1 from "./subcomponents/Discovery_1";
import Discovery_2 from "./subcomponents/Discovery_2";
import Discovery_3 from "./subcomponents/Discovery_3";


export default class HomeScreen_v2 extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null,
        }
    }

    mapViewRef = React.createRef();

    state = {
        hasLocationPermission: null,
        currentLocation: null,
        userMarkerCoordinates: [],
        selectedCoordinate: null,
        selectedAddress: null,
    };

    getLocationPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({ hasLocationPermission: status });
    };

    componentDidMount = async () => {
        await this.getLocationPermission();
    };

    updateLocation = async () => {
        const { coords } = await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced});
        this.setState({ currentLocation: coords });


    };

    handleLongPress = event => {
        const { coordinate } = event.nativeEvent;
        this.setState(prevState => {
            return {
                userMarkerCoordinates: [...prevState.userMarkerCoordinates, coordinate],
            };
        });
    };

    handleSelectMarker = coordinate => {
        this.setState({ selectedCoordinate: coordinate });
        this.findAddress(coordinate);
    };

    findAddress = async coordinate => {
        const [selectedAddress] = await Location.reverseGeocodeAsync(coordinate);
        this.setState({ selectedAddress });
    };

    closeInfoBox = () =>
        this.setState({ selectedCoordinate: null, selectedAddress: null });

    renderCurrentLocation = () => {
        const { hasLocationPermission, currentLocation } = this.state;
        if (hasLocationPermission === null) {
            return null;
        }
        if (hasLocationPermission === false) {
            return <Text>No location access. Go to settings to change</Text>;
        }

    };




    render() {
        const {
            userMarkerCoordinates,
            selectedCoordinate,
            selectedAddress,
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
                    onLongPress={this.handleLongPress}
                    initialRegion={{
                        latitude: 55.6518904,
                        longitude: 12.5047675,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>


                    <Marker
                        coordinate={{ latitude: 55.6381149, longitude: 12.5211022 }}
                        onPress={() => {
                            this.props.navigation.navigate('Discovery_1')
                        }}
                    >

                    </Marker>

                    <Marker
                        coordinate={{ latitude: 55.640981, longitude: 12.517502 }}
                        onPress={() => {
                            this.props.navigation.navigate('Discovery_2')
                        }}
                    >

                    </Marker>

                    <Marker
                        coordinate={{ latitude: 55.676533, longitude: 12.5301 }}
                        onPress={() => {
                            this.props.navigation.navigate('Discovery_3')
                        }}
                    >

                    </Marker>




                    {userMarkerCoordinates.map((coordinate, index) => (
                        <Marker
                            coordinate={coordinate}
                            key={index.toString()}
                            onPress={() => this.handleSelectMarker(coordinate)}
                        />
                    ))}
                </MapView>
                {selectedCoordinate && (
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>
                            {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                        </Text>
                        {selectedAddress && (
                            <Text style={styles.infoText}>
                                {selectedAddress.name} {selectedAddress.postalCode}
                            </Text>
                        )}
                        <Button title="close" onPress={this.closeInfoBox} />
                    </View>
                )}

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


