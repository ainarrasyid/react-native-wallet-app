import React, {FunctionComponent, useRef} from 'react';
import {SendMoneySectionProps} from './types';
import BottomSheet from 'reanimated-bottom-sheet';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '@styles/colors';
import commonStyle from '@styles/common.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SendMoneyItem from './SendMoneyItem';

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = props => {
  const sheetRef = useRef<BottomSheet>(null);
  const renderContent = () => {
    return (
      <View style={styles.background}>
        <View style={{...styles.row, marginBottom: 25}}>
          <Text
            style={{
              ...commonStyle.smallText,
              fontSize: 19,
              color: colors.secondary,
            }}>
            Send money to
          </Text>
          <TouchableOpacity
            style={styles.txtButton}
            onPress={() => Alert.alert('Add')}>
            <Text
              style={{
                ...commonStyle.smallText,
                fontWeight: 'bold',
                color: colors.tertiary,
              }}>
              +Add
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={props.data}
          style={styles.sendMoneyList}
          contentContainerStyle={styles.contentContainer}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({id}: any) => id.toString()}
          renderItem={({item}: any) => <SendMoneyItem {...item} />}
        />
      </View>
    );
  };
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
  },
  sendMoneyList: {
    width: '100%',
    minHeight: '80%',
    paddingHorizontal: 25,
  },
  txtButton: {},
  contentContainer: {
    alignItems: 'flex-start',
  },
});

export default SendMoneySection;
