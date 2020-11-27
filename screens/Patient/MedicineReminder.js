import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS, { normalize } from '../Constants/colorCode';
import {Picker} from '@react-native-community/picker';

const medicine = [
    {medicineName: 'Medicine', mg: '10mg', amount: '1 Pill', time: '8:00 AM', key: '1'},
    {medicineName: 'Medicine', mg: '10mg', amount: '1 Pill', time: '2:00 AM', key: '2'},
    {medicineName: 'Medicine', mg: '10mg', amount: '1 Pill', time: '11:00 AM', key: '3'},
    {medicineName: 'Medicine', mg: '10mg', amount: '1 Pill', time: '8:00 AM', key: '4'},
];

export default function App() {

    const renderItem = ({item}) => {
        return(
            <View style={{flexDirection: 'row', margin: normalize(10), paddingBottom: normalize(10), borderBottomWidth: 0.5, borderBottomColor: '#B4D3FC'}}>
                    <View style={{flex: 0.17, marginRight: normalize(5), paddingHorizontal: normalize(15), paddingVertical: normalize(10), borderWidth: 0.8, borderColor: COLORS.deepBlueHeader,borderRadius: 10,}}>
                        <Text style={{fontSize: 16, color: COLORS.textDeepBlue}}>{item.time}</Text>
                        
                    </View>
    
                    <View style={{flex: 0.83, padding: normalize(10), backgroundColor: '#F0F6FE', borderWidth: 0.8, borderColor: COLORS.deepBlueHeader, borderRadius: 10, paddingHorizontal: normalize(15)}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.textDeepBlue}}>{item.medicineName}</Text>
                        <Text>{item.amount}</Text>
                        
                    </View>
                </View>
        )
    }

    return(
        <View style={{flex: 1}}>

            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: normalize(19), color: COLORS.white}}>Medicine Reminder</Text>
                </View>
            </View>

            <View style={{flex: 0.9}}>
                <ScrollView>


                    <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.textDeepBlue, marginVertical: normalize(15), marginHorizontal: normalize(20)}}>Next Reminder</Text>
                    <View style={{width: COLORS.Width* 0.9, flexDirection: 'row', borderWidth: 0.8, borderColor: COLORS.deepBlueHeader, backgroundColor: '#F0F6FE', elevation: 4, borderRadius: 20,
                                alignSelf: 'center', justifyContent: 'center', marginBottom: normalize(15), padding: normalize(15)}}>
                        <View style={{marginRight: normalize(20)}}>
                            <Ionicons name="md-alarm-outline" size={45} color={COLORS.deepBlueHeader}/>
                            <Text style={{fontSize: 16, color: COLORS.textDeepBlue}}>(Tiime)</Text>
                        </View>
                        <View style={{flex: 1, }}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.textDeepBlue}}>(Medicine Name)</Text>
                            <Text style={{fontSize: 16, color: COLORS.textDeepBlue}}>(Amount of pills)</Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <FlatList
                            data={medicine}
                            renderItem={renderItem}
                        />
                    </View>
                
                </ScrollView>

                <TouchableOpacity style={{backgroundColor: COLORS.deepBlueHeader, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: normalize(15), alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: COLORS.textWhite, fontWeight: 'bold'}}>Get Medicine Scedule</Text>
                </TouchableOpacity>

            </View>
                  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: COLORS.Width,
        backgroundColor: COLORS.white,
        elevation: 6,
        padding: normalize(15),
        borderTopLeftRadius: 30, borderTopRightRadius: 30,
    },
});