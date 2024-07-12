import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { storeData, getData } from '../storage/storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


    useEffect(() => {
      // Fetch products from external API
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }, []);

  const handleAddToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await storeData('cart', newCart);
  };

  const handleProductClick = (product) => {
    navigation.navigate('ProductDetail', { product })
  }

  return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Header />
            <View style={styles.icons}>
                <Text style={styles.title}>OUR STORY</Text>
                <Image source={require('../assets/images/Listview.png')} style={styles.icon1} />
                <Image source={require('../assets/images/Filter.png')} style={styles.icon2} />
            </View>
            <ProductList products={products} onAddToCart={handleAddToCart} onProductClick={handleProductClick} />
        </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon1: {
    marginLeft: 140,
  }
});

export default HomeScreen;
