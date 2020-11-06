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
import SpeciesBook_v2 from "./components/SpeciesBook_v2";



//Her oprettes appens StackNavigator, og de forskellige components sættes som screens
const Stack = createStackNavigator(
    {
        LoadScreen: { screen: LoadScreen },
        HomeScreen: { screen: HomeScreen},
        AppHomeScreen: { screen: NewDiscovery},
        SubmitNewDiscovery: { screen: SubmitNewDiscovery },
        SpeciesBook: { screen: SpeciesBook_v2},


    },
    { initialRouteKey: 'HomeScreen' },

);

//Her oprettes appens TabNavigator, hvori HomeScreen sættes som StackNavigator
const TabNavigator = createBottomTabNavigator({
        HomeScreen: {
            screen: Stack,
            navigationOptions: {
                tabBarLabel:"Se fund",
                //Ikon sættes via import
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="enviromento" size={24} color={tintColor} />
                )
            },
        },
        NewDiscovery: {
            screen:NewDiscovery,
            navigationOptions: {
                tabBarLabel:"Nyt fund",
                //Ikon sættes via import
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
            activeTintColor: '#d6e9c6',
            inactiveTintColor: 'gray',
            size:100,
            style: {
                backgroundColor: '#143D1D'
            }
        }
    });


//Her oprettes appens DrawerNavigator, hvori Hjem sættes som TabNavigator
const Drawer = createDrawerNavigator ({
    Hjem: {
        screen: TabNavigator,
    },
    Artsbogen: {
        screen: SpeciesBook_v2,
    },
},
{
    contentOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
    },
    drawerBackgroundColor: '#143D1D',

});

//Der ønskes ikke at TabNavigatoren er synlig på LoadScreen
//Funktionen sætter tabBarVisible = true på alle screens og hvis det er LoadScreen er den false
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






//createAppContainer tager DrawerNavigator som parameter, og DrawerContainer kaldes i render metoden
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



