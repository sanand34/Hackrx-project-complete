import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import Products from '../../data/cart';
import {useRoute, useNavigation} from '@react-navigation/native';
const ShoppingCartScreen = () => {
  const [cartProducts, setCartProducts] = useState(Products);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    setTotalPrice(
      cartProducts.reduce(
        (summedPrice, product) =>
          summedPrice + product.price * product.quantity,
        0,
      ),
    );
  }, [cartProducts]);

  const onCheckout = () => {
    navigation.navigate('Address', {totalPrice});
  };
  useEffect(() => {
    route.params ? setCartProducts([route.params, ...cartProducts]) : null;
  }, [route.params]);

  return (
    <View style={{padding: 10}}>
      {/* Render Product Componet */}
      <FlatList
        data={cartProducts}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({cartProducts.length} items):{''}
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: 'black',
                borderColor: 'black',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;
