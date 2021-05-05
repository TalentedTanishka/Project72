import * as React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import ReadScreen from './screens/ReadStoryScreen';
import WriteScreen from './screens/WritingStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
 render()
 {
   return(
     
     <AppContainer/>
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

var TabNavigator = createBottomTabNavigator({
  WriteStory : {screen:WriteScreen},
  ReadStory : {screen:ReadScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routName = navigation.state.routeName
      if(routName==='WriteStory')
      {
        return(
          <Image style={{width:40 , height:40}} source={require('./assets/write.png')}></Image>
        )
      }
     else if(routName==='ReadStory')
      {
        return(
          <Image style={{width:40 , height:40}} source={require('./assets/read.png')}></Image>
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)
