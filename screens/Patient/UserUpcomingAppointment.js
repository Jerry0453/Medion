import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from '../Constants/colorCode';
import {Picker} from '@react-native-community/picker';

const appointmentSchedule = [
    {date: '15', month: 'Aug', year: '2019', docName: 'Dr. Saif Hasan', speciality: 'Cardiology', time: '10:00 AM', chamber: 'chamber1', key: '1'},
    {date: '12', month: 'Sep', year: '2019', docName: 'Dr. Mahmudul Hasan', speciality: 'Cardiology', time: '9:00 AM', chamber: 'chamber1', key: '2'},
    {date: '20', month: 'Sep', year: '2019', docName: 'Dr. Mahmudul Hasan', speciality: 'Cardiology', time: '9:00 AM', chamber: 'chamber2', key: '3'},
];

export default function App() {

    const renderItem2 = ({item}) => {
        if(item.key === '1'){
            return(
                <View style={{backgroundColor: '#B4D3FC', borderWidth: 0.8, borderColor: COLORS.deepBlueHeader, padding: normalize(15), borderRadius: 15,}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                        <View>
                            <Text style={{fontSize: 19, fontWeight: 'bold', }}>{item.docName}</Text>
                            <Text style={{fontSize: 16}}>{item.speciality}</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 19, fontWeight: 'bold', }}>{item.date} {item.month}, {item.year}</Text>
                            <Text style={{fontSize: 16}}>{item.chamber}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{alignItems: 'center', backgroundColor: COLORS.deepBlueHeader, borderRadius: 10, marginTop: normalize(10),  paddingHorizontal: normalize(15), paddingVertical: normalize(8) }}>
                        <Text style={{color: COLORS.textWhite}}>Edit Appointment</Text>
                    </TouchableOpacity>
                </View>
            )} 
    }
    const renderItem = ({item}) => {
        if(item.key !== '1'){
            return(
                <View style={{flexDirection: 'row', marginHorizontal: normalize(15), marginTop: normalize(15), paddingBottom: normalize(10), borderBottomWidth: 0.5, borderBottomColor: '#B4D3FC'}}>
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
                            <Text>{item.chamber}</Text>
                        </View>
                    </View>
                </View>
            )}
    }

    return(
        <View style={{flex: 1}}>

            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: normalize(19), color: COLORS.white}}>Upcoming Appointment</Text>
                </View>
            </View>

            <View style={{flex: 0.9}}>

                    <Text style={{color: COLORS.textDeepBlue, fontSize: 20, fontWeight: 'bold', margin: normalize(15)}}>Next Appointment</Text>

                    <View>
                        <FlatList
                            style={{marginHorizontal: normalize(15)}}
                            data={appointmentSchedule}
                            renderItem={renderItem2}
                        />
                    </View>

                    <Text style={{color: COLORS.textDeepBlue, fontSize: 20, fontWeight: 'bold', margin: normalize(15)}}>Upcoming Appointment</Text>


                    <View style={styles.container}>
                        <FlatList
                            data={appointmentSchedule}
                            renderItem={renderItem}
                        />

                        <TouchableOpacity style={{backgroundColor: COLORS.deepBlueHeader, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: normalize(15), alignItems: 'center'}}>
                            <Text style={{fontSize: 18, color: COLORS.textWhite, fontWeight: 'bold'}}>GET AN APPOINTMENT</Text>
                        </TouchableOpacity>
                    </View>
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
        paddingTop: normalize(10),
        borderTopLeftRadius: 30, borderTopRightRadius: 30,
    },
});