import {colors} from '@styles/colors';
import commonStyle from '@styles/common.style';
import React, {FunctionComponent} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Text,
} from 'react-native';

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}
const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonView, props.btnStyles]}
      onPress={props.onPress}>
      <Text style={[commonStyle.regularText, props.textStyles]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: '100%',
    padding: 20,
    borderRadius: 20,
  },
});

export default RegularButton;
