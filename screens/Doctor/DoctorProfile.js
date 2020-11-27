import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import COLORS, { normalize } from './Components/colorCode';
import BlogComponent1 from './Components/BlogComponent1';
import BlogDetails from './BlogDetails';

const chamber = [
    {title: 'Chamber1', address: 'address', key: '1'},
    {title: 'Chamber2', address: 'address', key: '2'},
    {title: 'Chamber3', address: 'address', key: '3'},
    {title: 'Chamber3', address: 'address', key: '4'},
];

const VideoCallingInfo = [
    {time: '3:00 PM - 4:00 PM', day: 'Saturday', date: '12', month: 'Oct', patient: 'name', key: '1'},
    {time: '3:00 PM - 4:00 PM', day: 'Saturday', date: '12', month: 'Oct', patient: 'name', key: '2'},
    {time: '3:00 PM - 4:00 PM', day: 'Saturday', date: '12', month: 'Oct', patient: 'name', key: '3'},
];

export default function App() {

    const ChamberItems = ({item}) => {
        return (
            <View style={styles.chamberItemStyle}>
                <Text style={{fontSize: normalize(15)}}>{item.title}</Text>
                <Text style={{fontSize: normalize(15)}}>{item.address}</Text>
            </View>
        )
    }
    const renderItem = ({item}) => {
        const backgroundColor = item.key%2 === 0 ? '#BCE5AB' : '#B4D3FC';
        return (
            <View style={{width: COLORS.Width*0.9, borderRadius: 10, backgroundColor, padding: normalize(10), flexDirection: 'row', marginTop: normalize(10), alignSelf: 'center'}}>
                <View style={{borderRightWidth: 0.6, paddingHorizontal: normalize(15)}}>
                    <Text style={{fontSize: normalize(15), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>{item.date}</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: 'bold'}}>{item.month}</Text>
                </View>

                <View style={{paddingHorizontal: normalize(20)}}>
                    <Text style={{fontSize: normalize(15), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>{item.patient}</Text>
                    <Text style={{fontSize: normalize(15), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>{item.day},  {item.time}</Text>
                </View>
            </View>
        );
    }
    return(
        <View style={{flex: 1, backgroundColor: COLORS.deepBlueHeader}}>
            <ScrollView>
                
            <View style={{height: COLORS.Height*0.25}}></View>

            <View style={{backgroundColor: COLORS.white, borderTopStartRadius: normalize(30), borderTopEndRadius: normalize(30)}}>

                <View style={{flexDirection: 'row',  padding: normalize(20)}}>
                    <Image source={require('./Components/images/doc.jpg')} style={{marginRight: normalize(20), borderRadius: 50, height: 90, width: 90}} />
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: normalize(18), color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>Kaniz Fatima Tonni </Text>
                        <Text style={{fontSize: normalize(15), color: COLORS.textInputBorder}}>Cardiologist </Text>
                        <Text style={{flexWrap: 'wrap', fontSize: normalize(15), color: COLORS.textInputBorder, overflow: 'hidden'}}>MBBS From Dhaka Medical College and hospital</Text>
                        <Text style={{flexWrap: 'wrap', fontSize: normalize(15), color: COLORS.textInputBorder}}>PhD from Japan</Text>
                    </View>

                </View>

                <TouchableOpacity style={{backgroundColor: COLORS.deepBlueHeader, width: COLORS.Width*0.8, alignSelf: 'center', alignItems: 'center', paddingVertical: normalize(8), borderRadius: 10}}>
                    <Text style={{color: COLORS.textWhite}}>generate Prescription</Text>
                </TouchableOpacity>

                <View style={{marginTop: normalize(15)}}>
                    <Text style={{fontSize: normalize(16), fontWeight: 'bold', marginLeft: normalize(20)}}>Chamber</Text>
                    <FlatList
                        style={{marginRight: normalize(20), marginLeft: normalize(20)}}
                        data={chamber}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={ChamberItems}
                    />            
                </View>

                <View style={{marginTop: normalize(15),}}>
                    <Text style={{fontSize: normalize(16), fontWeight: 'bold', marginLeft: normalize(20)}}>Video Calling Schedule</Text>
                    <FlatList
                        data={VideoCallingInfo}
                        renderItem={renderItem}
                    />
                </View>


            </View>

            </ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', padding: normalize(15) }}>
                <AntDesign name="arrowleft" size={30} color={COLORS.textGrey} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    editProfileBtn: {
        marginTop: normalize(10),
        padding: normalize(5), 
        alignItems: 'center',
        borderRadius: 20,
        borderColor:'#B6BABA',
        borderWidth: 0.8,
        backgroundColor: COLORS.white,
        elevation: 4,
    },
    chamberItemStyle: {
        padding: normalize(8),
        paddingHorizontal: normalize(15),
        marginRight: normalize(15),
        marginTop: normalize(5),
        backgroundColor: COLORS.white,
        borderColor: COLORS.textInputBorder,
        borderWidth: 3,
        borderRadius: 10,
    }
});