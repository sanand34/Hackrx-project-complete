import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

const CartProductItem = ({cartItem}) => {
  const [quantity, updateQuantity] = useState(cartItem.quantity);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: cartItem.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {cartItem.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${cartItem.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(cartItem.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'black'}
              />
            ))}
            <Text>{cartItem.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${cartItem.price}
            {cartItem.oldPrice && (
              <Text style={styles.oldPrice}> ${cartItem.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={updateQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
