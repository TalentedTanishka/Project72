import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends React.Component{
 render()
 {
   return(
    
     <View>
       <Text style={{fontSize:90,textAlign:"center"}}>

         Read Story

       </Text>
    
       </View>
       
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});