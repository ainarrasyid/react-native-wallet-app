import Greeting from '@components/Header/Greeting';
import Profile from '@components/Header/Profile';
import {image} from '@images/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Balance from '@screens/Balance';
import Home from '@screens/Home';
import Welcome from '@screens/Welcome';
import {colors} from '@styles/colors';
import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from './root-stack-param-list';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
          },
          headerShadowVisible: false,
          headerTintColor: colors.secondary,
          headerRight: () => (
            <Profile
              img={image.imgAvatar}
              imgContainerStyle={{
                backgroundColor: colors.tertiary,
              }}
            />
          ),
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleStyle: {color: colors.graylight},
            headerLeft: props => (
              <Greeting
                mainText="Hey Rasyid!"
                subText="Welcome back"
                {...props}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({route, navigation}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerLeft: props => (
              <TouchableOpacity onPress={navigation.goBack}>
                <Ionicons
                  {...props}
                  name="chevron-back"
                  size={25}
                  color={colors.secondary}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
