import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Image,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import commonStyle, {ScreenWidth} from '@styles/common.style';
import {colors} from '@styles/colors';
import {CardProps} from './types';
import {image} from '@images/index';
import {useNavigation} from '@react-navigation/native';
import {Props as HomeProps} from '@screens/Home';

const CardItem: FunctionComponent<CardProps> = props => {
  const navigation = useNavigation<HomeProps['navigation']>();
  const handlePress = () => {
    navigation.navigate('Balance', {...props});
  };
  return (
    <ImageBackground style={styles.cardBackground} source={image.bgTransparent}>
      <TouchableHighlight
        style={styles.cardTouchable}
        underlayColor={colors.secondary}
        onPress={handlePress}>
        <View style={styles.touchableView}>
          <View style={styles.cardRow}>
            <Text style={[commonStyle.regularText, {color: colors.white}]}>
              ****** {props.accountNo.slice(6, 10)}
            </Text>
          </View>
          <View style={styles.cardRow}>
            <View style={{flex: 3}}>
              <Text
                style={[
                  commonStyle.smallText,
                  {marginBottom: 5, color: colors.graylight},
                ]}>
                Total balance
              </Text>
              <Text
                style={{
                  ...commonStyle.regularText,
                  fontSize: 19,
                }}>
                $ {props.balance}
              </Text>
            </View>
            <Image source={props.logo} style={styles.logo} />
          </View>
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardBackground: {
    height: '75%',
    width: ScreenWidth * 0.67,
    resizeMode: 'cover',
    backgroundColor: colors.accent,
    borderRadius: 25,
    marginRight: 25,
    overflow: 'hidden',
  },
  cardTouchable: {
    height: '100%',
    borderRadius: 25,
  },
  touchableView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    flex: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    flex: 1,
  },
});

export default CardItem;
