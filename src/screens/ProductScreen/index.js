import React, {useEffect, useState} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import item from '../../data/product';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {useStateValue} from '../../../appState/StateProvider';
import {actionTypes} from '../../../appState/reducer';
import Nudge from '../../../NudgeFramework/Nudge';
import {useAnalytics} from '@segment/analytics-react-native';
const ProductScreen = () => {
  const {track} = useAnalytics();
  const [{product, discount}, dispatch] = useStateValue();
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  const onAddToCart = () => {
    navigation.navigate('shoppingCart', {screen: 'cart', params: product});
  };
  const onBuy = () => {
    navigation.navigate('shoppingCart', {screen: 'Address'});
  };
  useEffect(() => {
    route.params
      ? dispatch({
          type: actionTypes.SET_PRODUCT,
          product: route.params,
        })
      : dispatch({
          type: actionTypes.SET_PRODUCT,
          product: item,
        });
  }, [route.params]);

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.root}>
        <Text style={styles.title}>{product.title}</Text>

        {/* Image carousel */}
        <ImageCarousel images={product.images} />

        {/* Option selector */}
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => setSelectedOption(itemValue)}>
          {product.options.map(option => (
            <Picker.Item label={option} value={option} />
          ))}
        </Picker>

        {/* Price */}
        {discount ? (
          <Nudge event={discount} track={track}>
            <Text style={styles.price}>
              from ${product.price.toFixed(2)}
              {product.oldPrice && (
                <Text style={styles.oldPrice}>
                  {' '}
                  ${product.oldPrice.toFixed(2)}
                </Text>
              )}
            </Text>
          </Nudge>
        ) : (
          <Text style={styles.price}>
            from ${product.price.toFixed(2)}
            {product.oldPrice && (
              <Text style={styles.oldPrice}>
                {' '}
                ${product.oldPrice.toFixed(2)}
              </Text>
            )}
          </Text>
        )}

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Qunatiti selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/* Button */}
        <Button
          text={'Add To Cart'}
          onPress={onAddToCart}
          containerStyles={{backgroundColor: 'black'}}
        />
        <Button text={'Buy Now'} onPress={onBuy} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;
