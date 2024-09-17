import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { RouteName } from '../../config';


const Haber = props => {
  const { navigation,data} = props;

  const ONPress = () => {
    navigation.navigate(RouteName.SECONDPAGE, {item: data});
  };
  return (
    <TouchableOpacity onPress={ONPress}>
      <View style={{width: '100%', height: 120, flexDirection: 'row'}}>
        <View style={{width: '50%', height: 110,alignItems:'center',flexDirection:'row'}}>
          <Image style={{width: 200, height: 80}} source={{uri: data.image}} />
        </View>
        <View style={{width: '50%', height: 90}}><Text style={{fontWeight:'bold'}}>{data.name}</Text></View>
       
      </View>
    </TouchableOpacity>
  );
};

export default Haber;

const styles = StyleSheet.create({});
