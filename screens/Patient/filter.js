import * as React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from './Constants/colorCode';
import RadioButtonRN from 'radio-buttons-react-native';

const DATA = [
    {
        key: '1',
        title: 'Speciality',
        subitems: [{label: 'Cardiologist'},
                    {label: 'Dermatologist'},
                    {label: 'Ear-Nose-Throat (ENT) Specialist'},
                    {label: 'Gynecologist/Obstetrician'},
                    {label: 'Neurologist'},],
    },
    {
        key: '2',
        title: 'Consultation Fee',
        subitems: [{label: 'Free'},
        {label: '1-200'},
        {label: '201-500'},
        {label: '5001-1000'},],
    },
    {
        key: '3',
        title: 'Sort by',
        subitems: [{label: 'Consultation Fee'}],
    },
    {
        key: '4',
        title: 'Online Booking',
        subitems: [{label: 'Online Booking'}],
    },
    {
        key: '5',
        title: 'In Hospital',
        subitems: [{label: 'govt hospital'}],
    },
];

const Item = ({ item }) => (
    <View style={styles.section}>
        <Text style={{color: '#898A8F', fontSize: normalize(12), marginStart: normalize(15)}}>{item.title}</Text>
        <RadioButtonRN
            data={item.subitems}
            circleSize={3}
            box={false}
            textStyle={{color: '#313450', fontSize: normalize(13)}}
            selectedBtn={(e) => console.log(e)}
            />
    </View>
);

export default function Filter({item}) {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0.1, paddingStart: normalize(15), paddingEnd: normalize(15), backgroundColor: '#0759C4', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{fontSize: normalize(16), fontWeight: 'bold', color: COLORS.white}}>Filter</Text>
                <Text style={{fontSize: normalize(12), color: COLORS.white}}>See all</Text>
            </View>
            <View style={{flex: 1.2}}>
            <ScrollView>
            <View style={{alignItems: 'center', backgroundColor: '#acccf5', }}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item item={item} />}
                />
            </View>
            <View style={{height: 100, backgroundColor: '#acccf5'}}></View>
            </ScrollView>
            </View>
            <View style={{position: 'absolute', bottom: 30, justifyContent: 'space-between', alignSelf: 'center', height: 50, width: '92%',flexDirection: 'row',}}>
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={{fontSize: normalize(13), color: '#fff', fontWeight: 'bold'}}>Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton}>
                    <Feather name="x" size={30} color="#4764ef" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        width: Dimensions.get('window').width*0.92,
        marginBottom: normalize(15),
        paddingTop: normalize(15),
        paddingBottom: normalize(15),
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 10,
    },
    applyButton: {
        height: 50, 
        width: Dimensions.get('window').width*0.92-60,
        backgroundColor: '#053871', 
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 25,
    },
    closeButton: {
        height: 50,
        width: 50,
        borderRadius: 80/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 25,
    },
});
