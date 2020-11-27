import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';
export default function DoctorListComponent1({text, iconName}) {
    return (
        <TouchableOpacity style={styles.SearchOption}>
            <EvilIcons name={iconName} size={25} color="#063777"  />
            <Text style={{color: '#011A30', fontSize: normalize(14)}}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  SearchOption: {
      width: Dimensions.get('window').width*0.9,
      height: normalize(30),
      backgroundColor: '#fff',
      elevation: 2,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      alignItems: 'center',
      flexDirection: 'row',
      paddingStart: 10,
  }
});
