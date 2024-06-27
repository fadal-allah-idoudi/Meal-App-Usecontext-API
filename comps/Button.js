import { Children } from 'react';

import { StyleSheet, Text, View,Pressable, Button } from 'react-native';
function PrimaryButton({children,cliked,style}){
    
return(
  
        <Pressable style={({pressed})=>pressed 
        ?[styles.Container,styles.pressed,style]
        : [styles.Container,style]}
        onPress={cliked} 
        android_ripple={{color:'#5e6e7b',}}
        >   
            <View >{children}</View>
        </Pressable>
    
)
}
export default PrimaryButton;
const styles=StyleSheet.create({
    Container:{
        elevation:2,
    },
   
    pressed:{
        opacity:0.75
    }
})