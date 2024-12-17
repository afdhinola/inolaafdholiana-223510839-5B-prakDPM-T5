import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ title, image }: { title: string; image: any }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 135,
    borderRadius: 8,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductItem;