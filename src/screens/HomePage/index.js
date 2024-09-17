import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,TextInput
} from 'react-native';
import React, {useEffect, useState} from 'react';
const winWidth = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {NewsApi} from '../../service';
import {HaberList, Newcategorylist} from '../../components';
import {RouteName} from '../../config';

const News = props => {
  const {navigation} = props;
  const [news, setNews] = useState([]);
  const [tag, setTag] = useState('general');
  
  const country = 'tr';
  const urlSent = `?country=${country}&tag=${tag}`;

  const category = [
    {id: '1', title: 'sport', press: true},
    {id: '2', title: 'general', press: false},
    {id: '3', title: 'economy', press: false},
    {id: '4', title: 'topic', press: false},
    {id: '5', title: 'covid-19', press: false},
  ];

  const getByCountry = () => {
    NewsApi.getNewsApi(urlSent)
      .then(data => {
        console.log('data in home', data.result);
        setNews(data.result);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };
  useEffect(() => {
    getByCountry();
  }, [tag]);
  
  
 

  console.log('tag', tag);
  return (
    <SafeAreaView style={{width: windowWidth, height: windowHeight}}>
    <View style={{padding: 16, alignItems: 'center'}}>
  <Text style={{fontSize: 24, color: 'gray'}}>
    {new Date().toLocaleDateString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
  </Text>
</View>

      <View style={{height: '5%',justifyContent:'flex-end'}}>
        <Newcategorylist
          data={category}
          buttonPress={categori => {
            console.log('categori', categori);
            category.forEach(item => {
              if (item.title === categori.title) {
                setTag(item.title);
              }
            });
          }}
        />
      </View>
      <View style={{height: '80%'}}>
        <HaberList data={news} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default News;
