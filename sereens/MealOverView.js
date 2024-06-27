import { Text, View ,StyleSheet, FlatList} from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from '../comps/MealItem'
import { useLayoutEffect } from "react";
function MealOverView({route,navigation}){
    const catId= route.params.catagoryId;
    const displayMeals =MEALS.filter((mealItem)=>{
        return( mealItem.categoryIds.indexOf(catId)>=0);
    });
    useLayoutEffect(()=>{
        const catagoryTil =CATEGORIES.find(
            (catagory)=>catagory.id === catId)
            .title;
            navigation.setOptions({
            title:catagoryTil
        });
    },[catId,navigation])
    
    function renderMealItem(itemData){
        const item =itemData.item;
        const mealItemProps={
            title: item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration,
            navigation:navigation,
            catId:item.id
        };
        return (<MealItem {...mealItemProps}/>)
    }
return(
    <View style={styles.container}>
        <FlatList data={displayMeals} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderMealItem}
        />
    </View>
)
}
export default MealOverView;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:16
    },
  });
  