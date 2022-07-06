import {View, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegularButton from '@components/Buttons/RegularButton';
import {colors} from '@styles/colors';

const ButtonSection = () => {
  return (
    <View style={styles.container}>
      <RegularButton btnStyles={{width: '50%'}} onPress={() => {}}>
        Cancel <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
});

export default ButtonSection;
