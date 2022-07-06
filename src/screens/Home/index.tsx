import CardSection from '@components/Cards/CardSection';
import SendMoneySection from '@components/SendMoney/SendMoneySection';
import TransactionSection from '@components/Transactions/TransactionSection';
import {colors} from '@styles/colors';
import commonStyle from '@styles/common.style';
import React, {FunctionComponent} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {cardsData} from './CardData';
import {SendMoneyData} from './SendMonetData';
import {TransactionData} from './TransactionData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigators/root-stack-param-list';

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.graylight} />
      <CardSection data={cardsData} />
      <TransactionSection data={TransactionData} />
      <SendMoneySection data={SendMoneyData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyle.container,
    backgroundColor: colors.graylight,
    width: '100%',
    flex: 1,
    paddingTop: 15,
  },
});

export default Home;
