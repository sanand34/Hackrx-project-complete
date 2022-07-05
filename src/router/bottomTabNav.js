import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from '../screens/MenuScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import ProductScreen from '../screens/ProductScreen';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const [colors, setColors] = useState({
    home: false,
    product: false,
    shoppingCart: false,
    more: false,
  });
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'black',
        }}>
        <Tab.Screen
          component={HomeStack}
          name="home"
          options={{
            tabBarIcon: ({color}) => (
              <Entypo
                name="home"
                color={colors.home ? 'red' : color}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          component={ProductScreen}
          name="product"
          options={{
            tabBarIcon: ({color}) => (
              <Entypo
                name="new"
                color={colors.product ? 'red' : color}
                size={25}
              />
            ),
          }}
        />

        <Tab.Screen
          component={ShoppingCartStack}
          name="shoppingCart"
          options={{
            tabBarIcon: ({color}) => (
              <Entypo
                name="shopping-cart"
                color={colors.shoppingCart ? 'red' : color}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          component={MenuScreen}
          name="more"
          options={{
            tabBarIcon: ({color}) => (
              <Entypo
                name="menu"
                color={colors.more ? 'red' : color}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNav;
/*
  <Button
        title="click"
        onPress={() => {
          navigation.navigate('shoppingCart', {screen: 'Address'});
        }}
      />
*/
