import {StyleSheet, Text, TextInput, View, Dimensions,Images} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Search = () => {
  return (
    <View
      style={{
        width: width,
        height: height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          width: width * 0.8,
          height: height * 0.06,
          backgroundColor: '#D7D6D2',
          borderRadius: 15,
        }}
        placeholder="Search News"
       
        />
        
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
