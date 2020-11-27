import {Dimensions, Platform, PixelRatio} from 'react-native';

const COLORS = {
  black: '#000',
  white: '#fff',
  dotColor: '#214157',
  HPmenuIcon: '#023E73',
  slideItemBorder: '#727C8E',
  font_family: 'Arial',
  doctorListHeader: '#063777',
  DoctorAppnt_Background: '#F5F5F5',
  deepBlueHeader: '#063777',
  textWhite: '#fff',
  textGrey: '#979A9A',
  textDeepBlue: '#063777',
  textlightBlue: '#19769F',
  textInputBorder: '#979A9A',
  Width: Dimensions.get('window').width,
  Height: Dimensions.get('window').height,
};
  
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;


export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export default COLORS;