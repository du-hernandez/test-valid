import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const GeoCard = ({title = 'No title', icon = 'alien-outline', route}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => (route ? navigation.navigate(...route) : {})}>
      <View style={styles.container}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <Icon name={icon} color="green" size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GeoCard;
