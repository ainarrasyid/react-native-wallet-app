import {Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import React, {FunctionComponent} from 'react';
import {SendMoneyProps} from './types';
import commonStyle, {ScreenWidth} from '@styles/common.style';
import {colors} from '@styles/colors';
import Profile from '@components/Header/Profile';

const SendMoneyItem: FunctionComponent<SendMoneyProps> = props => {
  return (
    <TouchableHighlight
      underlayColor={colors.secondary}
      style={[style.itemContainer, {backgroundColor: props.background}]}
      onPress={() => {
        Alert.alert('Send Money!');
      }}>
      <>
        <Profile img={props.img} imgContainerStyle={{marginBottom: 10}} />
        <Text
          style={[
            commonStyle.smallText,
            {
              textAlign: 'left',
              color: colors.white,
              fontSize: 12,
            },
          ]}>
          {props.name}
        </Text>
        <Text
          style={[
            commonStyle.regularText,
            {
              color: colors.white,
              textAlign: 'left',
              fontSize: 13,
            },
          ]}>
          $ {props.amount}
        </Text>
      </>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  itemContainer: {
    height: 130,
    width: ScreenWidth * 0.27,
    padding: 10,
    borderRadius: 15,
    justifyContent: 'space-around',
    marginRight: 10,
    marginBottom: 10,
  },
});

export default SendMoneyItem;
