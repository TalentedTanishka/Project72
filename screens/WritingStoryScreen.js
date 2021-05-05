import * as React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import firebase from 'firebase';
import db from '../config.js';

export default class WriteScreen  extends React.Component{

  constructor(){
    super();
    this.state = {
      title:'',
      author:'',
      story1:'',
      isSearchPressed: '',
    }
  }

  story=async()=>{
    
    db.collection("book").add({
      "author":this.state.author,
    "story":this.state.story1,
    "title":this.state.title
   })

    this.setState({
      title:'',
      author:'',
      story1:''
    })
}


 render()
 {
   return(
   
      
     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled  >
       <Text style={{fontSize:30,marginTop:30,textAlign:"center",backgroundColor:"purple",color:"white",fontWeight:"bold",padding:20}}>STORY HUB</Text>
       <View>
       <Image style={{width:300,height:150,alignSelf:"center",marginTop:40}} source={require('../assets/story.png')}></Image>
       </View>
       
        <TextInput 
        style=
        {[styles.inputbox ,
        {fontWeight:"bold",textAlign:"center"}]} 
        onChangeText={(title)=>{
          this.setState({
            title:title,
            isSearchPressed: false,
          })
        }}
        value={this.state.title} 
        placeholder="Title of the Story"
      
        />
        
        <TextInput 
        style= {[styles.inputbox ,
          {textAlign:"center"}]} 
        onChangeText={(author)=>{
          this.setState({
           
            author:author,
          
            isSearchPressed: false,
          })
        }}
        value={this.state.author}
         placeholder="Author"
         />

        <TextInput 
        style= {[styles.inputbox ,{height:170}]} 
        onChangeText={(story1)=>{
          this.setState({
            story1:story1,
            isSearchPressed: false,
          })
        }}
        value={this.state.story1} 
        placeholder="Write your Story" 
        multiline={true}
        />
        
        <TouchableOpacity 
        style=
        {{
          backgroundColor:"pink",
          borderRadius:10,
          borderWidth:1,
          width:90,
          marginTop:20,
          marginLeft:10,
          alignSelf:"center"
      }}
      onPress={()=>{
        ToastAndroid.showWithGravityAndOffset(
          " Congratulation! :) YOUR STORY IS SUBMITED ",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          10,
      100
        );
        this.setState({ isSearchPressed: true });
        this.story();  
      }}
      
      >
          <Text style={{fontSize:20,textAlign:"center"}}>
            Submit
          </Text>
        </TouchableOpacity>

         </KeyboardAvoidingView>
        
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  inputbox: {
    borderColor:"black",
    borderWidth:2,
    fontSize: 20,
    marginLeft:10,
   alignItems:"center",
    color:"black",
    marginTop:5,
    borderRadius:2,
    padding:10
  },
});