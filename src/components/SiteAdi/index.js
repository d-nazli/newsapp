import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {IKONS} from '../../assets';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SiteAdi = props => {
  const {source} = props;
  return (
    <View>
      <View
        style={{
          width: width,
          height: height * 0.08,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
      
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
          {source}
        </Text>
       
      </View>
    
    </View>
  );
};

export default SiteAdi;

const styles = StyleSheet.create({});
