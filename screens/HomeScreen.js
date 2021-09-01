import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyles}
          source={{uri: 'https://links.papareact.com/gzs'}}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  text: {
    color: 'dodgerblue',
  },
  imageContainer: {
    padding: 15,
  },
  imageStyles: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
