import {StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import Haber from '../Haber';
import Category from '../category';

const Categorylist = props => {
  const {data, navigation, buttonPress} = props;

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
          key={item.id}
          onPress={() => buttonPress(item)}
        >
        
         <View style={{width:100,height:30,backgroundColor:'gray',borderRadius:10}}><Text>{item.title}</Text></View>
          
        </TouchableOpacity>
          
        )}
      />
    </View>
  );
};

export default Categorylist;
{{/* <View>
      
{data.map(item => (
  <TouchableOpacity
    key={item.id}
    onPress={() => buttonPress(item)}
  >
  
   <View style={{width:100,height:30,backgroundColor:'gray',borderRadius:10}}><Text>{item.title}</Text></View>
    
  </TouchableOpacity>
))}

</View>*/}}