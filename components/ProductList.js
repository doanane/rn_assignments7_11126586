import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart, onProductClick }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.touchableContainer} 
          onPress={() => onProductClick(item)}
        >
          <ProductItem product={item} onAddToCart={onAddToCart} />
        </TouchableOpacity>
          
      )}
    />
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
  },
});

export default ProductList;
