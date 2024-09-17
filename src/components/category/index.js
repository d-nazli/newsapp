import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RouteName} from '../../config';

const Category = props => {
  const {navigation, press, category, onPress} = props;
  const [isPress, setIsPress] = useState(press);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 100,
          height: 30,
          backgroundColor: isPress ? 'gray' : 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: 10,
        }}>
        <Text>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
