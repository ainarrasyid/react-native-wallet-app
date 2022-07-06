import {View, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {BalanceCardProps} from './types';
import BalanceCard from './BalanceCard';

const BalanceCardSection: FunctionComponent<BalanceCardProps> = props => {
  return (
    <View style={styles.container}>
      <BalanceCard {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flex: 2,
  },
});

export default BalanceCardSection;
