import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {trend,save} from '../../assets/ikons'
import { SiteAdi } from '../../components';

const SecondPage = props => {
  const{navigation,route}=props;
  const{item}=route.params;

  return (
    <View>
      <Image  style={{width:width,height:height}}    source={{uri: item.image}}></Image>
      <View style={{position: 'absolute', bottom: 0,backgroundColor:'rgba(0,0,0,0.75)',width:width,height:height*0.4}}>
      <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>{item.name}</Text>
     <SiteAdi  source={item.source}/>
    <Text style={{fontSize:15,color:'white'}}>{item.description}</Text>
      </View>
    </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({})