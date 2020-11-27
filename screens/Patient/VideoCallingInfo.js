import  React, { useState } from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';
import VidCallingPayment from './VidCallingPayment';

export default function VideoCallingInfo({navigation}) {
    return (
        <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: normalize(20), color: COLORS.white}}>Appointment Confirmation</Text>
                </View>
            </View>

            <View style={{flex: 0.9, alignItems: 'center'}}>
                <ScrollView>
                    <View>
                        <View style={{elevation: 6, marginBottom: 30, backgroundColor: COLORS.white,alignItems: 'center', width: Dimensions.get('window').width, borderBottomStartRadius: 30, borderBottomEndRadius: 30}}>
                            <View style={{elevation: 6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.doctorListHeader, padding: normalize(15), borderBottomStartRadius: 30, borderBottomEndRadius: 30}}>
                                <View style={styles.profilePicBorder}>
                                    <Image style={styles.profilePic} source={require('../images/doc.jpg')} />
                                </View>
                                <View style={{flex: 1, marginStart: normalize(15), overflow: 'hidden'}}>
                                    <Text style={{color: '#fff', fontSize: normalize(18), fontWeight: 'bold'}}>Doctor's Name</Text>
                                    <Text style={{color: '#fff', fontSize: normalize(15)}}>Cardiologist</Text>
                                    <Text style={{color: '#fff', fontSize: normalize(14)}}>MBBS(CMC), BCS(Health), MD(in course)</Text>
                                    <Text style={{color: '#fff', fontSize: normalize(14)}}>Lecturer, Dhaka Medical College</Text>
                                    <Text style={{color: '#fff', fontSize: normalize(14)}}>Chamber: Labaid Hospital, Dhaka Medical College</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: COLORS.white, width: Dimensions.get('window').width, borderBottomStartRadius: 30, borderBottomEndRadius: 30, alignItems: 'center', padding: normalize(15)}}>
                                <Text style={{color: '#19769F', fontSize: normalize(18)}}>22-09-2020, 5:30 PM</Text>
                                <Text style={{color: '#19769F', fontSize: normalize(18)}}>Consultation Free: 500 BDT</Text>
                            </View>
                        </View>
                        
                        <View style={{backgroundColor: '#fff', alignSelf: 'center',marginBottom: 30, elevation: 6,borderRadius: 15, width: Dimensions.get('window').width*0.95, padding: 20}}>
                            <Text style={{fontSize: normalize(16), color: '#444547', margin: 10}}>Reference ID (if any)</Text>
                            <TextInput placeholder="Enter your Ref. Id" style={styles.refId} />
                            <TouchableOpacity style={styles.applyBtn}>
                                <Text style={{fontSize: normalize(16), color: '#fff',}}>Apply</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{elevation: 6, backgroundColor: '#fff', width: Dimensions.get('window').width, borderTopStartRadius: 30, borderTopEndRadius: 30,}}>
                            <View style={{backgroundColor: '#fff', width: Dimensions.get('window').width, padding: 30, borderTopStartRadius: 30, borderTopEndRadius: 30}}>
                                <Text style={{marginStart: 10, color: '#979A9A'}}>Customer Name</Text>
                                <TextInput placeholder="Name" style={styles.refId} />
                                <Text style={{marginStart: 10, color: '#979A9A'}}>Customer Age</Text>
                                <TextInput placeholder="Age" style={styles.refId} />
                                <Text style={{marginStart: 10, color: '#979A9A'}}>Customer Gender</Text>
                                <TextInput placeholder="Gender" style={styles.refId} />
                                <Text style={{marginStart: 10, color: '#979A9A'}}>Customer Phone</Text>
                                <TextInput placeholder="phone" style={styles.refId} />
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate(VidCallingPayment)} style={{elevation: 6, backgroundColor: COLORS.doctorListHeader, alignItems: 'center', width: Dimensions.get('window').width, borderTopStartRadius: 30, borderTopEndRadius: 30, padding: 10}}>
                                <Text style={{color: '#fff', fontSize: normalize(18)}}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profilePic: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 50,
    },
    profilePicBorder: {
        height: 110,
        width: 110,
        borderRadius: 105/2,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    refId: {
        fontSize: normalize(14),
        padding: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#979A9A',
        marginBottom: 10,
    },
    applyBtn: {
        width: '100%',
        backgroundColor: COLORS.doctorListHeader,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
