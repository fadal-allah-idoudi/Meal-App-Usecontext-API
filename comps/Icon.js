import {Pressable,StyleSheet, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';



function IconButton({ icon, color, onClick }) {
    return (
      
        <View style={styles.container}>
          <Pressable
            android_ripple={{ color: '#a68872' }}
            onPress={onClick}
            style={({ pressed }) => pressed ? [styles.pressed] : null}
          >
            <Ionicons name={icon} size={24} color={color} />
          </Pressable>
        </View>
      
    )
  }
  
  
export default IconButton;
const styles = StyleSheet.create({
pressed:{
    opacity:0.7,
   
},
container:{
    borderRadius:10,
    overflow:'hidden',
    margin:4
}
})