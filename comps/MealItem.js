import { Text, View ,StyleSheet, Pressable, Image,Platform} from "react-native";
import PrimaryButton from '../comps/Button';
import { useNavigation } from "@react-navigation/native";


function MealItem(props){
  const navigation=useNavigation()
  function cliked(){
    navigation.navigate("details",{
    Id: props.catId
 });
}
    return (
    <View style={styles.MealItem}>
      <PrimaryButton cliked={cliked}>
      <View>        
         <View style={{flex:1}}>
            <Image style={styles.Image} source={{uri: props.imageUrl}}/>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.details}> 
            <Text style={styles.Itemdetails}> {props.duration}m</Text>
            <Text style={styles.Itemdetails}>{props.complexity}</Text>
            <Text style={styles.Itemdetails}>{props.affordability}</Text>
          </View>    
        </View>

      </PrimaryButton>
    </View>
    )}
export default MealItem;
const styles = StyleSheet.create({
    Image: {
      width:'100%',
      height:200,
      
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        margin:16
    },
    MealItem:{
      margin:16,
      borderRadius:30,
      backgroundColor:'#97b3d0',
      overflow:'hidden',
      elevation:4,
      shadowColor:'black',
      shadowOpacity:0.25,
      shadowOffset:{width:0,height:2},
      shadowRadius:10,
      overflow:Platform.OS ==='android'?'hidden':'visible'

    },
    details:{
      flexDirection:'row',
      alignItems:'center',
      padding:8,
      justifyContent:'center'
    },
    Itemdetails:{
      marginHorizontal:4,
      fontSize:15
    }
  });
  