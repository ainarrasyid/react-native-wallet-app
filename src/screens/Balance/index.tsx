import {View, StyleSheet, StatusBar} from 'react-native';
import React, {FunctionComponent} from 'react';
import {colors} from '@styles/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigators/root-stack-param-list';
import AmountSection from '@components/Balance/AmountSection';
import BalanceCardSection from '@components/Balance/BalanceCardSection';
import ButtonSection from '@components/Balance/ButtonSection';

type Props = NativeStackScreenProps<RootStackParamList, 'Balance'>;
const Balance: FunctionComponent<Props> = ({route}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
    width: '100%',
    padding: 25,
    flex: 1,
  },
});
export default Balance;
