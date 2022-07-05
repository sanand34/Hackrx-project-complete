import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import ProductItem from '../../components/ProductItem';
import {useAnalytics} from '@segment/analytics-react-native';
import Products from '../../data/products';

const HomeScreen = ({searchvalue}) => {
  const {track} = useAnalytics();

  const [products, setProducts] = useState(Products);

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}

      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
