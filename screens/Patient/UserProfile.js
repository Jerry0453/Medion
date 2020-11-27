import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import COLORS, { normalize } from '../Constants/colorCode';
import BlogComponent1 from '../Components/BlogComponent1';
import BlogDetails from './BlogDetails';

const userInfo = [
    {name: 'Saif Hasan Mahmudul', type: 'Free user', membershipId: '10111420', profileDone: '60%', key: '1'},
];

const options = [
    {title: 'History', key: '1'},
    {title: 'Upcoming Appointment', key: '2'},
    {title: 'Video Calling Appointment', key: '3'},
    {title: 'E-prescription', key: '4'},
    {title: 'Reports', key: '5'},
    {title: 'Subscription History', key: '6'},
    {title: 'Medicine Reminder', key: '7'},
    {title: 'Notification', key: '8'},
];

export default function App() {
    const renderItem = ({item}) => {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: normalize(18), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{fontSize: normalize(16), color: COLORS.deepBlueHeader,}}>{item.type}</Text>
                <Text style={{fontSize: normalize(16), color: COLORS.deepBlueHeader}}>Membership Id: {item.membershipId}</Text>
                <TouchableOpacity style={{borderWidth: 0.5, borderColor: COLORS.deepBlueHeader, paddingVertical: normalize(10), alignItems: 'center', width: COLORS.Width*0.85, marginTop: normalize(10), backgroundColor: '#D7E6FB', borderRadius: 5}}>
                    <View style={{width: '85%', backgroundColor: COLORS.white, height: 5, borderRadius: 10, marginBottom: 5}}>
                        <View style={{width: item.profileDone, height: '100%',  backgroundColor: COLORS.deepBlueHeader, borderRadius: 10,}} />
                    </View>
                    <Text style={{fontSize: normalize(17), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>Complete your Profile: {item.profileDone} done</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth: 0.5, borderColor: COLORS.deepBlueHeader, paddingVertical: normalize(10), alignItems: 'center', width: COLORS.Width*0.85, marginTop: normalize(10),  backgroundColor: '#D7E6FB', borderRadius: 5}}>
                    <Text style={{fontSize: normalize(17), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>Upgrade to premium</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem2 = ({item}) => {
        const borderBottomWidth = item.key === '8' ? 0 : 0.8;
        return(
            <TouchableOpacity style={{padding: normalize(15), borderBottomWidth, borderColor: '#D7DBE0', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: normalize(17), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>{item.title}</Text>
                <AntDesign name="right" size={20} color={COLORS.deepBlueHeader} />
            </TouchableOpacity>
        )
    }

    return(
        <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
            <ScrollView>
                <View style={{height: normalize(85), width: COLORS.Width, elevation: 4, position: 'absolute', backgroundColor: COLORS.white, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}} />
                <View style={{height: normalize(110), width: normalize(110), borderRadius: normalize(55), backgroundColor: '#fff', elevation: 4, position: 'absolute', alignSelf: 'center', top: normalize(25)}}/>
                <View style={{height: normalize(80), elevation: 4,  backgroundColor: COLORS.deepBlueHeader, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}} />
                
                <View style={{marginTop: normalize(50), padding: normalize(10), alignItems: 'center'}}>
                    <FlatList
                        data={userInfo}
                        renderItem={renderItem}
                    />
                </View>
                
                <View style={{elevation: 4, backgroundColor: COLORS.white, margin: normalize(15), borderRadius: 15, padding: normalize(15)}}>
                    <FlatList
                        data={options}
                        renderItem={renderItem2}
                    />
                </View>

                <TouchableOpacity style={{paddingVertical: normalize(10), alignItems: 'center', alignSelf: 'center', width: COLORS.Width*0.85, margin: normalize(15), backgroundColor: COLORS.deepBlueHeader, borderRadius: 5}}>
                    <Text style={{fontSize: normalize(17), color: COLORS.textWhite, fontWeight: 'bold'}}>Edit Profile</Text>
                </TouchableOpacity>
                
                
                <Image source={require('./Components/images/doc.jpg')} style={{borderRadius: normalize(50), borderWidth: 2, borderColor: COLORS.white,  top: normalize(30), alignSelf: 'center', elevation: 4, height: normalize(100), width: normalize(100), position: 'absolute'}} />
           
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
});