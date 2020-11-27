import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';
export default function DoctorListComponent2({item, navigation, screenName1, screenName2}) {
    return (
        <View style={styles.doctorlistItem}>
            <View style={{flex: 0.35,  justifyContent: 'center', alignItems: 'center'}}>
                <Image style={styles.imageStyle} source={require('../images/doc.jpg')} />
                <TouchableOpacity style={styles.seeProfileStyle}>
                    <Text style={{color: '#03318C', fontSize: normalize(12), fontWeight: 'bold'}}>See Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
                <View style={{height: normalize(70), }}>
                    <Text style={{fontSize: normalize(13), color: '#19769F', fontWeight:'bold'}}>Mahmudul Hasan Saif</Text>
                    <Text style={{fontSize: normalize(11), color: '#444547'}}>MBBS(CMC), BCS(Health),MD(in course)</Text>
                    <Text style={{fontSize: normalize(11), color: '#444547'}}>Lecturer, Dhaka Medical College</Text>
                    <Text style={{fontSize: normalize(11), color: '#011A30'}}>Chamber: Lad Aid, Dhanmandi, Dhaka</Text>
                    <Text style={{fontSize: normalize(10), color: '#071734'}}>Consultation Fee: 500 BDT</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.appointment_call} onPress={() => navigation.navigate(screenName2)}>
                        <Text style={{color: '#03318C', fontSize: normalize(12), fontWeight: 'bold'}}>Get Appointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.appointment_call} onPress={() => navigation.navigate(screenName1)}>
                        <Text style={{color: '#03318C', fontSize: normalize(12), fontWeight: 'bold'}}>Book Video Call</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    doctorlistItem: {
        width: Dimensions.get('window').width*0.9,
        height: normalize(110),
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    seeProfileStyle: {
        backgroundColor: '#F5F6F8',
        width: normalize(70),
        height: normalize(18), 
        marginTop: normalize(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#979A9A',
    },
    imageStyle: {
        height: '63.63%',
        width: normalize(70),
        borderRadius: 10,
    },
    appointment_call: {
        backgroundColor: '#F5F6F8',
        width: '45%',
        marginEnd: normalize(10),
        height: normalize(18), 
        marginTop: normalize(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#979A9A',
    }
});
