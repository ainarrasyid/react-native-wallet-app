import {StyleSheet, FlatList} from 'react-native';
import React, {FunctionComponent} from 'react';
import {CardSectionProps} from './types';
import CardItem from './CardItem';

const CardSection: FunctionComponent<CardSectionProps> = props => {
  return (
    <FlatList
      style={styles.cardList}
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardListContentContainer}
      keyExtractor={({id}: any) => id.toString()}
      renderItem={({item}: any) => <CardItem {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    paddingLeft: 25,
    paddingBottom: 15,
    width: '100%',
  },
  cardListContentContainer: {
    paddingRight: 25,
    alignItems: 'center',
  },
});

export default CardSection;
