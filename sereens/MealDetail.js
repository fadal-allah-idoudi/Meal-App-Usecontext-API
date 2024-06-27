import { View,Text, Button,Image, StyleSheet, ScrollView } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import ItemDeatail from '../comps/ItemDeatail';
import Triple from '../comps/Triple';
import List from "../comps/List";
import { useLayoutEffect } from "react";
import IconButton from "../comps/Icon";
import { useState,useCallback } from "react";
function MealDetail({route,navigation}){
    const Id= route.params.Id;
    const displayMeals =MEALS.find(mealItem=>mealItem.id ===Id);
    const [isFavorite, setIsFavorite] = useState(false);
    const click = useCallback(() => {
      setIsFavorite(prevState => !prevState);
    }, []);
    useLayoutEffect(()=>{
     
        navigation.setOptions({
        headerRight:()=>{
          return ( <IconButton
            icon={'star'}
            color={isFavorite ? "yellow" : "white"}
            onClick={click}/>)
        }
    });
  },[navigation, isFavorite, click])
  
return(
    <ScrollView style={{flex:1,alignContent:'center'}}>
      <Text style={{color:"white",fontSize:19,fontWeight:'bold',margin:8,textAlign:'center'}}>{displayMeals.title}</Text>
      <Image style={styles.Image} source={{uri: displayMeals.imageUrl}}/>
      <Triple duration={displayMeals.duration} complexity={displayMeals.complexity} affordability={displayMeals.affordability}/>
      <View style={{alignItems:'center'}} >
        <View style={{width:"80%",}}>
          <View style={styles.textconataineer}>
            <Text style={styles.textStyle}># Ingredients</Text>
          </View>
          <List data={displayMeals.ingredients}/>
          <View style={styles.textconataineer}>
            <Text style={styles.textStyle}># Steps</Text>
          </View>
          <List data={displayMeals.steps}/>
          <View style={styles.textconataineer}>
            <Text style={styles.textStyle}># remark</Text>
          </View>
          <ItemDeatail  label="Vegan" value={displayMeals.isVegan} />
          <ItemDeatail  label="Vegetarian" value={displayMeals.isVegetarian} />
          <ItemDeatail  label="Gluten Free" value={displayMeals.isGlutenFree} />
          <ItemDeatail  label="Lactose Free" value={displayMeals.isLactoseFree} />
        </View>
      </View>
    </ScrollView>
    )
}
export default MealDetail;
const styles = StyleSheet.create({
  
    Image: {
      width:'100%',
      height:350,
      borderRadius:25
    },textStyle:{
      flex:1,
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      margin:8,
      color:'#dfa97f',

    },
    textconataineer:{
      borderBlockColor:'#dfa97f',
      borderBottomWidth:2,
      padding:10,
      margin:5,
      
     
    }
  });
  
