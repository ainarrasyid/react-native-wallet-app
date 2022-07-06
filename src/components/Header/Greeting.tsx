import {View, Text, StyleProp, TextStyle, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import commonStyle from '@styles/common.style';
import {colors} from '@styles/colors';

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}
const Greeting: FunctionComponent<GreetingProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={[styles.mainText, props.mainTextStyles]}>
        {props.mainText}
      </Text>
      <Text style={[styles.subText, props.subTextStyles]}>{props.subText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  mainText: {
    ...commonStyle.regularText,
    color: colors.secondary,
    fontSize: 22,
  },
  subText: {
    ...commonStyle.smallText,
    color: colors.graydark,
  },
});

export default Greeting;
