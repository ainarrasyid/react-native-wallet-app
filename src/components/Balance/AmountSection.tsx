import {View, Text, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {AmountProps} from './types';
import commonStyle from '@styles/common.style';
import {colors} from '@styles/colors';

const AmountSection: FunctionComponent<AmountProps> = props => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          commonStyle.smallText,
          {color: colors.secondary, marginBottom: 15},
        ]}>
        Total Balance
      </Text>
      <Text
        style={[
          commonStyle.regularText,
          {color: colors.secondary, fontSize: 28},
        ]}>
        $ {props.balance}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 5,
    alignItems: 'center',
    flex: 1,
  },
});

export default AmountSection;
