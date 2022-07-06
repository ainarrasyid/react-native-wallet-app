import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './colors';
import {Fonts} from './fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  smallText: {
    fontSize: 13,
    color: colors.gray,
    textAlign: 'left',
    fontFamily: Fonts.Regular,
  },
  bigText: {
    fontSize: 37,
    color: colors.gray,
    textAlign: 'left',
    fontFamily: Fonts.Bold,
  },
  regularText: {
    fontSize: 15,
    color: colors.white,
    textAlign: 'left',
    fontFamily: Fonts.Regular,
  },
});

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
