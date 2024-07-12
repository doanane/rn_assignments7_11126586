import React,  {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from '../components/Header'; 
import { storeData, getData } from '../storage/storage';


const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;

    const [cart, setCart] = useState([]);

    const handleAddToCart = async (product) => {
        let newProduct;
        if (typeof product.price === 'string') {
          newProduct = { ...product, price: parseFloat(product.price.replace('$', '')) };
        } else {
          newProduct = { ...product };
        }
        const newCart = [...cart, newProduct];
        setCart(newCart);
        await storeData('cart', newCart);
    };

    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Header />
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.name}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/images/DoNotBleach.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Do not use bleach</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/images/DoNotTumbleDry.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Do not tumble dry</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/images/DoNotWash.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Dry clean with tetrachloroethylene</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/images/IronLowTemperature.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Iron at a maximum of 110°C/230°F</Text>
                    </View>
                </View>

                <View style={styles.shippingContainer}>
                    <View style={styles.line} />
                    <Image source={require('../assets/images/Shipping.png')} style={styles.shippingIcon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
                        <Text style={styles.deliveryDate}>Estimated to be delivered on</Text>
                        <Text style={styles.deliveryDate}>09/11/2021 - 12/11/2021</Text>
                    </View>
                    <Image source={require('../assets/images/Up.png')} style={styles.upIcon} />
                </View>

                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(product)}>
                    <Image source={require('../assets/images/Plus.png')} style={[styles.plusIcon, {tintColor: '#fff'}] } />
                    <Text style={styles.buttonText}>ADD TO BASKET</Text>
                    <Image source={require('../assets/images/Heart.png')} style={[styles.heartIcon, {tintColor: '#fff'}]} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 16,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        color: '#f60',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
    },
    infoContainer: {
        marginBottom: 16,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },

    infoText: {
        fontSize: 16,
    },
    shippingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    line: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#ccc',
    },
    shippingIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    textContainer: {
        flex: 1,
    },
    shippingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    deliveryDate: {
        fontSize: 14,
        color: '#555',
    },
    upIcon: {
        width: 16,
        height: 16,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#000',
        borderRadius: 5,
        marginTop: 16,
    },
    plusIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },
    heartIcon: {
        width: 16,
        height: 16,
        marginLeft: 8,
    },
});

export default ProductDetailScreen

