import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from '../Constants/colorCode';
import {Picker} from '@react-native-community/picker';
import { color } from 'react-native-reanimated';
import UserHistoryComponent1 from '../Components/UserHistoryComponent1';

const appointmentSchedule = [
    {date: '15', month: 'Sep', year: '2019', docName: 'Dr. Saif Hasan', speciality: 'Cardiology', time: '10:00 AM', Type: 'Pending', key: '1'},
    {date: '12', month: 'Sep', year: '2019', docName: 'Dr. Mahmudul Hasan', speciality: 'Cardiology', time: '9:00 AM', Type: 'Completed', key: '2'},
    {date: '20', month: 'Sep', year: '2019', docName: 'Dr. Mahmudul Hasan', speciality: 'Cardiology', time: '9:00 AM', Type: 'Pending', key: '3'},
];

const option = [
    {title: 'Upcoming Appointment', key: '1'},{title: 'History', key: '2'},
];

export default function App() {

    const [selected, setSelected] = useState('1');

    const renderItem = ({item}) => {
        if(item.Type === 'Pending' && item.key !=='1'){
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
    }

    const renderItem1 = ({item}) => {
        if(item.Type === 'Completed'){
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
    }

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

    const renderItem3 = ({item}) => {
        const backgroundColor = selected === item.key ? COLORS.deepBlueHeader : null;
        const color = selected === item.key ? COLORS.white : COLORS.deepBlueHeader;
        return(
            <TouchableOpacity onPress={() => setSelected(item.key)}
                style={{width: COLORS.Width*0.48, borderColor: COLORS.deepBlueHeader, borderWidth: 2, alignItems: 'center', margin: normalize(5), borderRadius: 5, backgroundColor, marginTop: normalize(20), paddingVertical: normalize(8) }}>
                <Text style={{color}}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={{flex: 1}}>

            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: normalize(19), color: COLORS.white}}>Video Calling Appointment</Text>
                </View>
            </View>

            <View style={{flex: 0.9}}>
                <Text style={{color: COLORS.textDeepBlue, fontSize: 20, fontWeight: 'bold', margin: normalize(15)}}>Next Video Call Appointment</Text>

                <View>
                    <FlatList
                        style={{marginHorizontal: normalize(15)}}
                        data={appointmentSchedule}
                        renderItem={renderItem2}
                    />
                </View>

                <View>
                <FlatList
                    data={option}
                    horizontal={true}
                    renderItem={renderItem3}
                />
                </View>

                {selected === '1' ? (
                    <View>
                        <View style={[styles.ArrowStyle, {marginLeft: COLORS.Width*0.25}]} />
                        <View style={styles.container2}>
                            <FlatList
                                data={appointmentSchedule}
                                renderItem={renderItem}
                            />
                        </View> 
                    </View>) : (
                        <View>
                        <View style={[styles.ArrowStyle, {marginLeft: COLORS.Width*0.75}]} />
                        <View style={styles.container2}>
                            <FlatList
                                data={appointmentSchedule}
                                renderItem={renderItem1}
                            />
                        </View> 
                    </View>
                    )}

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
    ArrowStyle: {
        marginTop: 5,
        width: 0, height: 0,
        borderLeftWidth: 15, borderBottomWidth: 20, borderRightWidth: 15,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: COLORS.white,
        elevation: 8,
    },
    container2: {
        width: COLORS.Width,
        height: 500,
        backgroundColor: COLORS.white,
        elevation: 8,
        paddingVertical: normalize(10),
        borderTopLeftRadius: 25, borderTopRightRadius: 25,
    },
});