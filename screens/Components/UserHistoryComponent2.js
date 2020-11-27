import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from './colorCode';
import {Picker} from '@react-native-community/picker';

const medicine = [
    {name: 'medicine Name1', gram: '10mg', key: '1'},
    {name: 'medicine Name2', gram: '5', key: '2'},
    {name: 'medicine Name3', gram: '20', key: '3'},
    {name: 'medicine Name4', gram: '10', key: '4'},
];
export default function UserHistoryComponent2() {

    const renderItem = ({item}) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }

    return(
        <View style={{flex: 1}}>

            <View style={styles.ArrowStyle} />
            <View style={styles.container}>
                <Text style={{fontSize: 20, color: COLORS.textDeepBlue, fontWeight: 'bold', marginBottom: normalize(10)}}>Health Packages</Text>

                <Text style={{fontSize: 20, color: COLORS.textDeepBlue, fontWeight: 'bold', marginBottom: normalize(10)}}>Medicines Information</Text>
                <FlatList
                    data={medicine}
                    renderItem={renderItem}
                />
            </View> 
                  
        </View>
    )
}

const styles = StyleSheet.create({
    ArrowStyle: {
        marginTop: 5, marginLeft: COLORS.Width*0.48,
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
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(15),
        borderTopLeftRadius: 25, borderTopRightRadius: 25,
    },
});