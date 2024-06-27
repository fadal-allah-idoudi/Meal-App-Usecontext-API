import { View,Text, FlatList,Image, StyleSheet } from "react-native";
function Triple(props){
    return(
        <View style={styles.details}> 
            <Text style={[styles.Itemdetails,props.style]}> {props.duration}m</Text>
            <Text style={[styles.Itemdetails,props.style]}>{props.complexity}</Text>
            <Text style={[styles.Itemdetails,props.style]}>{props.affordability}</Text>
          </View>
    )
}
export default Triple;
const styles = StyleSheet.create({
    details:{
      flexDirection:'row',
      alignItems:'center',
      padding:8,
      justifyContent:'center'
    },
    Itemdetails:{
      marginHorizontal:4,
      color:"white",
      fontSize:19,
      fontWeight:'bold',
      margin:8,
    }
  });
  