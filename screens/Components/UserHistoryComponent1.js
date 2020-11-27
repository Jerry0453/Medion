import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from './colorCode';
import {Picker} from '@react-native-community/picker';

const appointmentHistory = [
    {date: '15', month: 'Aug', year: '2019', docName: 'Dr. Saif Hasan', speciality: 'Cardiology', time: '10:00 AM - 11:00 AM', type: 'Pending', key: '1'},
    {date: '12', month: 'Jul', year: '2019', docName: 'Dr. Mahmudul Hasan', speciality: 'Cardiology', time: '9:00 AM - 10:00 AM', type : 'Completed', key: '2'},
];

export default function UserHistoryComponent1() {
    const renderItem = ({item}) => {
        return (
            <View style={{flexDirection: 'row', margin: normalize(15), paddingBottom: normalize(10), borderBottomWidth: 0.5, borderBottomColor: '#B4D3FC'}}>
                <View style={{flex: 0.13, marginRight: normalize(5), paddingHorizontal: normalize(15), paddingVertical: normalize(10), borderWidth: 0.8, borderColor: COLORS.deepBlueHeader,borderRadius: 10,}}>
                    <Text style={{fontSize: 25, color: COLORS.textDeepBlue}}>{item.date}</Text>
                    <Text style={{fontSize: 16}}>{item.month}</Text>
                    <Text style={{fontSize: 12}}>{item.year}</Text>
                </View>

                <View style={{flex: 0.87, padding: normalize(10), backgroundColor: '#F0F6FE', borderWidth: 0.8, borderColor: COLORS.deepBlueHeader, borderRadius: 10, paddingHorizontal: normalize(15)}}>
                    <Text style={{fontSize: 18}}>{item.docName}</Text>
                    <Text>{item.speciality}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.time}</Text>
                        <Text>{item.type}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <View style={{flex: 1}}>

            <View style={styles.ArrowStyle} />
            <View style={styles.container}>
                <FlatList
                    data={appointmentHistory}
                    renderItem={renderItem}
                />
            </View> 
                  
        </View>
    )
}

const styles = StyleSheet.create({
    ArrowStyle: {
        marginTop: 5, marginLeft: COLORS.Width*0.15,
        width: 0, height: 0,
        borderLeftWidth: 15, borderBottomWidth: 20, borderRightWidth: 15,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: COLORS.white,
        elevation: 8,
    },
    container: {
        width: COLORS.Width,
        height: 500,
        backgroundColor: COLORS.white,
        elevation: 8,
        paddingVertical: normalize(10),
        borderTopLeftRadius: 25, borderTopRightRadius: 25,
    },
});