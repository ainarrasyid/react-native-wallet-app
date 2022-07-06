import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  ViewStyle,
  GestureResponderHandlers,
} from 'react-native';
import React, {FunctionComponent} from 'react';

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderHandlers) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = props => {
  return (
    <TouchableOpacity style={[styles.container, props.imgContainerStyle]}>
      <Image source={props.img} style={[styles.image, props.imgStyle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 45,
    width: 45,
    borderRadius: 15,
    marginRight: 10,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});

export default Profile;
