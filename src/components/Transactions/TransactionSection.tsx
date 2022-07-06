import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TransactionSectionProps} from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import commonStyle from '@styles/common.style';
import {colors} from '@styles/colors';
import TransactionItem from './TransactionItem';

const TransactionSection: FunctionComponent<
  TransactionSectionProps
> = props => {
  return (
    <View style={styles.transactionSectionBackground}>
      <View style={styles.transactionRow}>
        <Text
          style={{
            ...commonStyle.regularText,
            fontSize: 19,
            color: colors.secondary,
          }}>
          Transaction
        </Text>
        <Text style={{...commonStyle.smallText, color: colors.secondary}}>
          Recent
          <Ionicons name="caret-down" size={13} color={colors.graydark} />
        </Text>
      </View>
      <FlatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        style={styles.transactionList}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionSectionBackground: {
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 5,
    flex: 2,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  transactionList: {
    width: '100%',
  },
});

export default TransactionSection;
