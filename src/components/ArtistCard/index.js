import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const imagePlaceholder =
  'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2020/05/09/5eb6f1961be26.r_1589080845620.0-1289-3000-2777.jpeg';

const ArtistCard = ({
  name = 'Margarita Rosa de Francisco',
  image = imagePlaceholder,
}) => (
  <View style={styles.container}>
    <Avatar
      rounded
      source={{uri: image}}
      size="large"
      avatarStyle={styles.avatar}
    />
    <View style={styles.body}>
      <Text style={styles.name}>{name}</Text>
    </View>
    <View>
      <Icon name="account-music" size={30} color="#FFF" />
    </View>
  </View>
);

export default ArtistCard;
