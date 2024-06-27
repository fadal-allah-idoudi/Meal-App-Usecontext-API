import { View,Pressable,Text,StyleSheet, Button,Platform } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function CategoryGridTile(props){
    
    return (
    <View style={styles.gridItem}>
        <Pressable android_ripple={{color:'black'}}
         style={({pressed})=>[styles.Button,pressed ? styles.pressed:styles.Button]}
         onPress={props.cliked}>
            <View style={[styles.innerContainer,{backgroundColor:props.color}]}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </Pressable>
    </View>)
}
export default CategoryGridTile;
const styles= StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 16,
        height:150,
        borderRadius:10,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        backgroundColor:'white',
        overflow:Platform.OS ==='android'?'hidden':'visible'
        
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    Button:{
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    },
    pressed:{
        opacity:0.15
    }
})
