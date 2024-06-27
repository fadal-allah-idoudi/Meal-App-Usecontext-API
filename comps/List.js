import { View,Text,StyleSheet } from "react-native";
function List({data}){
return(
    data.map((dataPoint)=>
        (
       <View style={styles.ListItem}>   
        <Text style={{color:'#422d1d',fontSize:16,fontWeight:'bold',margin:8,textAlign:'center'}} key={dataPoint}>{dataPoint}</Text>
        </View>  )
      )
)
}
export default List;
const styles = StyleSheet.create({
    ListItem:{
        borderRadius:19,
        paddingHorizontal:10,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:10,
        backgroundColor:'#dfa97f'
    }
})