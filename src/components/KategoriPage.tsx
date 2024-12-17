import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryItem = ({ title, image }: { title: string; image: any }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 80,
    height: 40,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default CategoryItem;