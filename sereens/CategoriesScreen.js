import { CATEGORIES  } from "../data/dummy-data";
import {FlatList  } from "react-native";
import CategoryGridTile from "../comps/CategoryGridTile"


function CategoriesScreen ({navigation}){
    function renderCategories(itemData){
        function pressHundler(){
            navigation.navigate('MealOverView',{
               catagoryId: itemData.item.id,
            })
        }
    return (
        <CategoryGridTile title={itemData.item.title} 
        color={itemData.item.color} cliked={pressHundler}
        />
    );
}
    return (
    <FlatList  data={CATEGORIES} 
    keyExtractor={(item)=> item.id } 
    renderItem={renderCategories}
    numColumns={2}     
    />);
}
export default CategoriesScreen ;