import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from './colorCode';
import {Picker} from '@react-native-community/picker';

const subscription = [
    {packageName: 'Senior Citizen Package', date: '20-10-2020', cost: '1500 BDT', key: '1'},
    {packageName: 'package 2', date: '20-11-2020', cost: '2000 BDT', key: '2'},
];
export default function UserHistoryComponent3() {

    const renderItem = ({item}) => {
        return (
            <View style={{borderBottomWidth: 0.5, borderBottomColor: '#B4D3FC'}}>
                <View style={{flex: 0.87, padding: normalize(10), marginVertical: normalize(10), backgroundColor: '#F0F6FE', borderWidth: 0.8, borderColor: COLORS.deepBlueHeader, borderRadius: 10, paddingHorizontal: normalize(15)}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.packageName}</Text>
                    <Text>Purchased on {item.date}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 16}}>{item.cost}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <View style={{flex: 1}}>

            <View style={styles.ArrowStyle} />
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', overflow: 'hidden'}}>
                        <Text style={styles.nameStyle}>Health CheckUp</Text>
                        <View style={styles.straightLine} />
                    </View>
                    <FlatList
                        data={subscription}
                        renderItem={renderItem}
                    />
                </View>
            </View> 
                  
        </View>
    )
}

const styles = StyleSheet.create({
    ArrowStyle: {
        marginTop: 5, marginLeft: COLORS.Width*0.8,
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
    nameStyle: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: COLORS.font_family,
        marginVertical: normalize(10),
        marginRight: normalize(5),
    },
    straightLine: {
        alignSelf: 'center',
        marginEnd: normalize(10),
        borderWidth: 0.5,
        borderColor: COLORS.black,
        width: '100%',
        height: 0,
    },
});