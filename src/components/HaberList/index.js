import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Haber from '../Haber';

const Haberlist = props => {
  const {data, navigation} = props;
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Haber
            description={item.description}
            date={item.date}
            image={item.image}
            name={item.name}
            navigation={navigation}
            data={item}
          />
        )}
      />
    </View>
  );
};

export default Haberlist;
