import  React, { useState } from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';
import HomePage from './HomePage';

export default function DocAppointmentFinal({navigation}) {
    return (
        <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background}}>
           <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{flex: 0.1, padding: 15}}>
                <AntDesign name="close" size={30} color={COLORS.doctorListHeader} />
           </TouchableOpacity>

           <View style={{flex: 0.9, alignItems: 'center',  padding: 25}}>
                <Text style={{fontSize: normalize(28), color: COLORS.doctorListHeader, fontWeight: 'bold'}}>Congratulation</Text>
                <Text style={{textAlign: 'center', fontSize: normalize(18)}}>Your appointment with (Doctor name) has been confirmed on</Text>
                <Text style={{textAlign: 'center', fontSize: normalize(18)}}>(Date) at (time)</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
});
