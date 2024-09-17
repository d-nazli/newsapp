// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {RouteName} from '../config';
import {Image, StyleSheet, Text, View} from 'react-native';
import IKONS from '../assets/ikons';
// import React from 'react';
import {HomePage, TrendPage, SavePage} from '../screens';
// const Tab = createBottomTabNavigator();
// const TabNav = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name={RouteName.HOMEPAGE}
//         component={HomePage}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View style={{image: 80, height: 80}}>
//               <Image source={{}}></Image>
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen name={RouteName.TRENDPAGE} component={TrendPage} />
//     </Tab.Navigator>
//   );
// };

// export default TabNav;

// const styles = StyleSheet.create({});

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../assets/ikons';

const Tab = createBottomTabNavigator();

export default MyTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={IKONS.home}></Image>
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Trends" component={TrendPage} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems: 'center', marginTop: 5}}>
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? '#e32f45' : '#748c94',
            }}
            source={IKONS.trend}></Image>
          <Text
            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
         Trends
          </Text>
        </View>  
        ),
      }}/>
      <Tab.Screen name="Save" component={SavePage} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems: 'center', marginTop: 5}}>
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? '#e32f45' : '#748c94',
            }}
            source={IKONS.save}></Image>
          <Text
            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
         Save
          </Text>
        </View>  
        ),
      }}/>

     
    </Tab.Navigator>
  );
};
