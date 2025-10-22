import React from 'react';
import {  ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75;
const COLORS = {
  primary: '#5D4037', 
  secondary: '#D1A384', 
  white: '#FFFFFF',
  textLight: '#A0522D', 
  textGray: '#888888',
  lightBackground: '#F7F7F7',
};

const categories = [
    { name: 'Cappuccino', icon: 'cup-outline', active: true },
    { name: 'Latte', icon: 'cafe-outline', active: false },
    { name: 'Espresso', icon: 'sparkles-outline', active: false },
    { name: 'Mocha', icon: 'flash-outline', active: false },
    { name: 'Cold Brew', icon: 'water-outline', active: false },
];

const products = [
    { id: 'p1', name: 'Cappuccino', volume: '160ml', price: 25.40, rating: 4.3, image: require('../assets/images/pro1.jpeg'), active: true },
    { id: 'p2', name: 'Latte', volume: '200ml', price: 24.50, rating: 4.5, image: require('../assets/images/pro1.jpeg'), active: false },
    { id: 'p3', name: 'Espresso', volume: '60ml', price: 15.00, rating: 4.1, image: require('../assets/images/pro1.jpeg'), active: false },
];

const ProductCard = ({ product }) => (
    <View style={[styles.productCard, product.active && styles.activeProductCard]}>
        <Image source={product.image} style={styles.productImage} />
        <View style={styles.cardContent}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.ratingRow}>
                <AntDesign name="star" size={14} color={COLORS.white} />
                <Text style={styles.productRating}>{product.rating}</Text>
            </View>
            <Text style={styles.productVolume}>Volume {product.volume}</Text>
            <View style={styles.productFooter}>
                <Text style={styles.productPrice}>$ {product.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.productAddButton}>
                    <AntDesign name="plus" size={20} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const CategoryFilter = ({ category }) => (
    <TouchableOpacity style={[styles.categoryPill, category.active && styles.activeCategoryPill]}>
        <Ionicons name={category.icon} size={16} color={category.active ? COLORS.primary : COLORS.textGray} style={styles.categoryIcon} />
        <Text style={[styles.categoryText, category.active && styles.activeCategoryText]}>
            {category.name}
        </Text>
    </TouchableOpacity>
);

const Header = () => (
    <View style={styles.header}>
        <View style={styles.userInfo}>
            <Image source={require('../assets/images/pro1.jpeg')} style={styles.avatar} />
            <Ionicons name="location-sharp" size={18} color={COLORS.primary} />
            <Text style={styles.locationText}>Los Vegas</Text>
        </View>
        <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color={COLORS.primary} />
        </TouchableOpacity>
    </View>
);

const SearchBar = () => (
    <View style={styles.searchBar}>
        <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={COLORS.textGray}
        />
        <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
    </View>
);

const BottomNav = () => (
    <View style={styles.bottomNav}>
        <Feather name="home" size={24} color={COLORS.primary} />
        <Feather name="heart" size={24} color={COLORS.textGray} />
        <Ionicons name="grid-outline" size={24} color={COLORS.textGray} />
        <Feather name="menu" size={24} color={COLORS.textGray} />
    </View>
);

export default function ProductsScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.mainScroll}>
                <SearchBar />
                <View style={styles.categoriesSection}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                        {categories.map(cat => <CategoryFilter key={cat.name} category={cat} />)}
                    </ScrollView>
                </View>
                
                <View style={styles.productCarouselSection}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={CARD_WIDTH + 20}
                        decelerationRate="fast"
                        contentContainerStyle={styles.productScrollContent}
                    >
                        {products.map(p => <ProductCard key={p.id} product={p} />)}
                    </ScrollView>
                </View>
                <View style={{ height: 100 }} /> 
            </ScrollView>
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainScroll: {
        paddingHorizontal: 20,
    },
    // --- Header Styles ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 18,
        marginRight: 15,
        borderWidth: 1,
        borderColor: COLORS.textGray,
    },
    locationText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.primary,
        marginLeft: 5,
    },
    // --- Search Bar Styles ---
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightBackground,
        borderRadius: 15,
        marginBottom: 30,
        height: 50,
        paddingLeft: 15,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: COLORS.primary,
        marginRight: 10,
    },
    searchButton: {
        backgroundColor: COLORS.secondary,
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    // --- Categories Styles ---
    categoriesSection: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 15,
    },
    categoryScroll: {
        // ...
    },
    categoryPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightBackground,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 12,
        marginRight: 10,
    },
    activeCategoryPill: {
        backgroundColor: COLORS.secondary,
    },
    categoryIcon: {
        marginRight: 5,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textGray,
    },
    activeCategoryText: {
        color: COLORS.primary,
    },
    // --- Product Card Styles (Carousel) ---
    productScrollContent: {
        paddingVertical: 10,
    },
    productCard: {
        width: CARD_WIDTH,
        height: 420,
        marginRight: 20,
        borderRadius: 30,
        backgroundColor: COLORS.lightBackground,
        padding: 20,
        // Card is inactive by default
        transform: [{ scale: 0.9 }], 
        opacity: 0.7,
    },
    activeProductCard: {
        backgroundColor: COLORS.primary, // البني الغامق للبطاقة النشطة
        transform: [{ scale: 1 }], 
        opacity: 1,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    productImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginBottom: 20,
    },
    cardContent: {
        alignItems: 'center',
    },
    productName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 5,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
    },
    productRating: {
        color: COLORS.white,
        marginLeft: 5,
        fontWeight: '600',
    },
    productVolume: {
        fontSize: 16,
        color: COLORS.white,
        opacity: 0.8,
        marginBottom: 15,
    },
    productFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    productAddButton: {
        backgroundColor: COLORS.white,
        width: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // --- Bottom Nav Styles ---
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingBottom: 5,
    },


});