import { Text, View ,StyleSheet, Pressable, Image,Platform} from "react-native";
function ItemDeatail(props){
return(
    <View  style={styles.ListItem}>        
       <Text style={[styles.itemDetails,props.textStyle]}>{props.label}: {props.value ? 'Yes' : 'No'}</Text>
    </View>
)}
export default ItemDeatail;
const styles = StyleSheet.create({
    itemDetails:{
      marginHorizontal:4,
      color:'#442d1b',
      fontSize:19,
      fontWeight:'bold',
      margin:8,textAlign:'center'
    },
    ListItem:{
      borderRadius:19,
      paddingHorizontal:10,
      paddingVertical:4,
      marginVertical:4,
      marginHorizontal:10,
      backgroundColor:'#dfa97f'
  }
  });
  