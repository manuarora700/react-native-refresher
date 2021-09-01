import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'green',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2
  }
});
export default App;
