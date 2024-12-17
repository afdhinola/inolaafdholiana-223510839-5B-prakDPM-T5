import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PopularItem = ({ item }: { item: { title: string; image: any } }) => {
    return (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
    },
});

export default PopularItem;