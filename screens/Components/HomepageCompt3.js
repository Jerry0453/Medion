import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import COLORS, {normalize} from '../Constants/colorCode';

const Data = [
  {
    DoctorIcon: require('../images/images.png'),
    text: 'Talk to a Doctor (Free)',
    call: 'Call Now',
    icon2: require('../images/images-3.png'),
    color1: '#024714',
    color2: '#029128',
    key: '1',
  },
  {
    DoctorIcon: require('../images/images-1.png'),
    text: 'Doctor Appointment',
    call: 'Video Call',
    icon2: require('../images/images-4.png'),
    color1: '#023E73',
    color2: '#2468F1',
    key: '2',
  },
];

const DataItem = ({item}) => (
  <TouchableOpacity style={styles.view}>
      <Image source={item.DoctorIcon} />
      <Text
        style={{
          fontSize: 20,
          color: item.color1,
          fontFamily: COLORS.font_family,
          fontWeight: "bold",
        }}>
        {item.text}
      </Text>
    <View
      style={{
        paddingStart: normalize(5),
        width: '30%',
        justifyContent: 'center',
        paddingEnd: normalize(5),
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: item.color2,
        borderWidth: 1,
        borderRadius: 50,
      }}>
      <Text
        style={{
          fontSize: normalize(14),
          color: item.color2,
          fontFamily: COLORS.font_family,
          fontWeight: "bold",
        }}>
        {item.call} </Text>
      <Image source={item.icon2} />
    </View>
  </TouchableOpacity>
);

export default function CallingOption() {
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList data={Data} renderItem={({item}) => <DataItem item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginBottom: normalize(10),
    backgroundColor: '#fff',
    width: '92%',
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: normalize(5),
    paddingEnd: normalize(10),
    paddingStart: normalize(10),
    borderRadius: 8,
    borderWidth: 1.8,
    borderColor: '#F2F3F4',
  },
})