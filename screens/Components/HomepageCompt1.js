import React, { useState } from "react";
import {Button, View, Text, TouchableOpacity, Dimensions, StyleSheet, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS, { normalize } from '../Constants/colorCode';

export default function Header({navigation}) {
  const [selectedValue, setSelectedValue] = useState("English");

  return (
    <View  style={styles.container}>
      <TouchableOpacity style={{marginLeft: normalize(15)}} onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" size={normalize(30)} color={COLORS.HPmenuIcon} />
      </TouchableOpacity>

      <Image style={{marginBottom: normalize(10)}}
        source={require('../images/asset-1.png')}
      />
      <TouchableOpacity style={styles.language} >
        <Text style={{color: COLORS.HPmenuIcon}}>{selectedValue}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',  
    elevation: 8,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  language: {
    marginRight: normalize(15),
    borderWidth: 1,
    borderRadius: 50,
    paddingStart: normalize(10),
    paddingEnd: normalize(10),
    borderColor : COLORS.HPmenuIcon,
  },
});