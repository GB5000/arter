import React,{Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Header extends Component {

    //funktion der åbner DrawerNavigator
    handleNavigation = () =>{
        this.props.navigation.openDrawer();
    }

    //Der indsættes et ikon og via TouchableOpacity og dertilhørende onPress kaldes handleNavigation
    render() {
        const {title}= this.props
        return(
            <View style={styles.container}>


                <TouchableOpacity style={styles.icon} onPress={this.handleNavigation}>
                    <MaterialCommunityIcons name="forwardburger" size={25} color="black" />
                </TouchableOpacity>

                <Text style={styles.txt}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'space-around',
        paddingTop:15,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor: '#F9F1E7',

    },
    icon:{
        width:'15%',
        display: 'flex',
        justifyContent: 'flex-end',

    },
    txt:{
        width: '85%',
        textAlign:'center',
        fontSize:25,
        paddingRight:66
    }
})
