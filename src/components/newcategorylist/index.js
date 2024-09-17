import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const Newcategorylist = ({data, buttonPress}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data.map(item => (
        <TouchableOpacity key={item.id} onPress={() => buttonPress(item)}>
          <View
            style={{
              width: 100,
              height: 30,
              backgroundColor: 'gray',
              borderRadius: 10,
            }}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Newcategorylist;
