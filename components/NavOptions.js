import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const NavOptions = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '123',
      title: 'Get a Ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '456',
      title: 'Order Food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen', // Change in future
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.boxContainer}>
          <View>
            <Image style={styles.img} source={{uri: item.image}} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Icon
            style={styles.iconStyle}
            type="antdesign"
            color="white"
            name="arrowright"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  boxContainer: {
    padding: 2,
    paddingLeft: 6,
    paddingBottom: 8,
    paddingTop: 4,
    backgroundColor: '#dddddd',
    margin: 10,
    width: 150,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '700',
  },
});
