import React from 'react';
import {View, FlatList} from 'react-native';
import {ArtistCard} from '../../../../components';
import styles from './styles';

const ArtistsView = ({artists}) => {
  const renderItem = ({item: {name, image}}) => {
    return <ArtistCard name={name} image={Object.values(image[1])[0]} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.mbid}
        onEndReachedThreshold={0.5}
        data={artists}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ArtistsView;
