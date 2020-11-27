import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';

export default function AnsweredList({item}) {
    return (
        <View style={{borderBottomWidth: 0.8, borderColor: COLORS.doctorListHeader, padding: 15, }}>
            <Text style={{fontSize: normalize(16), fontWeight: 'bold'}}>{item.patient} </Text>
            <Text style={{fontSize: normalize(14)}}>{item.date}</Text>
            <Text style={{fontSize: normalize(15), color: '#19769F'}}>{item.que}</Text>
            <Text style={{fontSize: normalize(16)}}>Answer: {item.ans}</Text>
            <Text style={{fontSize: normalize(16), fontWeight: 'bold'}}>by {item.doctor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  
});
