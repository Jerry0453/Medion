import  React, { useState } from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';

export default function CardPayment() {
    return (
      <View style={{padding: 15, }}>
          <TextInput placeholder="Enter Card Number" style={styles.cardnumber} />
          <View style={{flexDirection: 'row'}}>
            <TextInput placeholder="MM/YY" style={styles.refId} />
            <TextInput placeholder="CVC/CVV" style={styles.refId} />
          </View>
          <TextInput placeholder="Card Holder Name" style={styles.cardnumber} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    cardnumber: {
        fontSize: normalize(14),
        padding: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#979A9A',
        marginBottom: 15,
    },
    refId: {
        fontSize: normalize(14),
        padding: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#979A9A',
        marginBottom: 15,
        width: '49%',
        marginEnd: '2%',
    }
});
  