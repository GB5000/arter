import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator,} from 'react-native';
import LoadScreen from "./components/LoadScreen";
import HomeScreen from "./components/HomeScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {AntDesign} from "@expo/vector-icons";
import NewDiscovery from "./components/NewDiscovery";
import SubmitNewDiscovery from "./components/SubmitNewDiscovery";
import {createDrawerNavigator} from "react-navigation-drawer";
import SpeciesBook from "./components/SpeciesBook";



const Stack = createStackNavigator(
    {
        LoadScreen: { screen: LoadScreen },
        HomeScreen: { screen: HomeScreen},
        AppHomeScreen: { screen: NewDiscovery},
        SubmitNewDiscovery: { screen: SubmitNewDiscovery },
        SpeciesBook: { screen: SpeciesBook},


    },
    { initialRouteKey: 'HomeScreen' },

);

const TabNavigator = createBottomTabNavigator({
        HomeScreen: {
            screen: Stack,
            navigationOptions: {
                tabBarLabel:"Se fund",
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="enviromento" size={24} color={tintColor} />
                )
            },
        },
        NewDiscovery: {
            screen:NewDiscovery,
            navigationOptions: {
                tabBarLabel:"Nyt fund",
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="camerao" size={24} color={tintColor} />
                )
            },
        }
    },
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: '#133C1C',
            inactiveTintColor: 'gray',
            size:100
        }
    });



const Drawer = createDrawerNavigator ({
    Hjem: {
        screen: TabNavigator,
    },
    Artsbogen: {
        screen: SpeciesBook,
    },
},
{
    contentOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
    },
    drawerBackgroundColor: '#133c1c',

});


Stack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'LoadScreen' ) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}




const DrawerContainer = createAppContainer(Drawer);

export default class App extends React.Component {


    render() {
        return (
            <View style={styles.container}>


                    <DrawerContainer/>






                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F1E7',
        flex: 1,

    },
});



