import  React, { useState } from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import COLORS, {normalize} from '../Constants/colorCode';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CardPayment from '../Components/PaymentComponent1';
import MobileBankingPayment from '../Components/PaymentComponent2';
import VideoCallingFinal from './VideoCallingFinal';

export default function VidCallingPayment({navigation}) {
    const [selection, setSelection] = useState('0');
    return (
        <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: normalize(20), color: COLORS.white}}>Payment</Text>
                </View>
            </View>

            <View style={{flex: 0.9, alignItems: 'center'}}>
                <ScrollView>

                    <View style={{elevation: 6, marginBottom: 10, backgroundColor: COLORS.white,alignItems: 'center', width: Dimensions.get('window').width, borderBottomStartRadius: 30, borderBottomEndRadius: 30}}>
                        <View style={{width: Dimensions.get('window').width, elevation: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.doctorListHeader, padding: normalize(15), borderBottomStartRadius: 30, borderBottomEndRadius: 30}}>
                            <Image style={styles.profilePic} source={require('../images/doc.jpg')} />
                            <Text style={{color: '#fff', fontSize: normalize(18), margin: 15,}}>Doctor's Name</Text>
                        </View>
                        <View style={{backgroundColor: COLORS.white, width: Dimensions.get('window').width, borderBottomStartRadius: 30, borderBottomEndRadius: 30, alignItems: 'center', padding: normalize(15)}}>
                            <Text style={{color: '#444547', fontSize: normalize(18)}}>22-09-2020, 5:30 PM</Text>
                            <Text style={{color: '#444547', fontSize: normalize(18)}}>Consultation Free: 500 BDT</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', alignSelf: 'center',}}>
                        <View style={{alignItems: 'center', margin: 10}}>
                            <SimpleLineIcons style={{backgroundColor: '#D0D3D4', borderRadius: 50, padding: 8}} name="earphones-alt" size={20} color="#000" />
                            <Text style={{color: '#19769F', fontSize: 14}}>Support</Text>
                        </View>
                        <View style={{alignItems: 'center', margin: 10}}>
                            <AntDesign style={{backgroundColor: '#D0D3D4', borderRadius: 50, padding: 8}} name="questioncircleo" size={20} color="#000" />
                            <Text style={{color: '#19769F', fontSize: 14}}>FAQ</Text>
                        </View>
                        <View style={{alignItems: 'center', margin: 10}}>
                            <AntDesign style={{backgroundColor: '#D0D3D4', borderRadius: 50, padding: 8}} name="gift" size={20} color="#000" />
                            <Text style={{color: '#19769F', fontSize: 14}}>Offers</Text>
                        </View>
                    </View>
                    
                    <View style={{width: Dimensions.get('window').width, flexDirection: 'row',}}>
                        <TouchableOpacity onPress={() => setSelection('0')} style={{alignItems: 'center', padding: 5, backgroundColor: COLORS.doctorListHeader, flex: 1,}}>
                            <Text style={{fontSize: normalize(13), color: '#fff'}}>CARDS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => setSelection('1')} style={{alignItems: 'center', padding: 5, backgroundColor: COLORS.doctorListHeader, flex: 1,}}>
                            <Text style={{fontSize: normalize(13), color: '#fff'}}>MOBILE BANKING</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => setSelection('2')} style={{alignItems: 'center', padding: 5, backgroundColor: COLORS.doctorListHeader, flex: 1,}}>
                            <Text style={{fontSize: normalize(13), color: '#fff'}}>NET BANKING</Text>
                        </TouchableOpacity>
                    </View>
                    {selection === '0' ? (<CardPayment />) : selection === '1' ?
                    (<MobileBankingPayment />) : (<MobileBankingPayment/>)}
                    
                </ScrollView>

                <TouchableOpacity onPress={() => navigation.navigate(VideoCallingFinal)} style={{elevation: 6,backgroundColor: COLORS.doctorListHeader, alignItems: 'center', width: Dimensions.get('window').width, borderTopStartRadius: 30, borderTopEndRadius: 30, padding: 10}}>
                   <Text style={{color: '#fff', fontSize: normalize(16)}}>Pay 500 BDT</Text>
                </TouchableOpacity>
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
