import React, {FunctionComponent} from 'react';
import {image} from '@images/index';
import commonStyle from '@styles/common.style';
import {Image, StyleSheet, View, Text, StatusBar} from 'react-native';
import {colors} from '@styles/colors';
import RegularButton from '@components/Buttons/RegularButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigators/root-stack-param-list';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome: FunctionComponent<Props> = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.welcomeContainer}>
        <View style={styles.topSection}>
          <Image style={styles.topImage} source={image.bgDefault} />
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.title}>Best way to track your journey</Text>
          <Text style={styles.subTitle}>
            Best payment method, connect your money to your friends, family
          </Text>
          <RegularButton
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Get Started
          </RegularButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    ...commonStyle.container,
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  topSection: {
    width: '100%',
    flex: 1,
    maxHeight: '55%',
  },
  bottomSection: {
    width: '100%',
    padding: 25,
    flex: 1,
    justifyContent: 'flex-end',
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  title: {
    ...commonStyle.bigText,
    width: '70%',
    marginBottom: 25,
  },
  subTitle: {
    ...commonStyle.smallText,
    width: '70%',
    marginBottom: 25,
  },
});

export default Welcome;
