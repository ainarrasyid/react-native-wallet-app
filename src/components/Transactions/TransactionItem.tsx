import {View, Text, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TransactionProps} from './types';
import TransactionAvi from './TransactionAvi';
import commonStyle from '@styles/common.style';
import {colors} from '@styles/colors';

const TransactionItem: FunctionComponent<TransactionProps> = props => {
  return (
    <View style={styles.transactionRow}>
      <View style={styles.leftView}>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              ...commonStyle.regularText,
              color: colors.secondary,
              textAlign: 'left',
              marginBottom: 5,
            }}>
            {props.title}
          </Text>
          <Text
            style={{
              ...commonStyle.smallText,
              textAlign: 'left',
              color: colors.graydark,
            }}>
            {props.subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <Text
          style={{
            ...commonStyle.regularText,
            color: colors.secondary,
            textAlign: 'right',
            marginBottom: 5,
          }}>
          {props.amount}
        </Text>
        <Text
          style={{
            ...commonStyle.smallText,
            textAlign: 'right',
            color: colors.graydark,
          }}>
          {props.date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  leftView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center',
    flex: 2,
  },
  rightView: {
    flex: 1,
  },
});
export default TransactionItem;
