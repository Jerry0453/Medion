import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS, { normalize } from './Components/colorCode';
import {Picker} from '@react-native-community/picker';
import BlogComponent1 from './Components/BlogComponent1';
import BlogDetails from './BlogDetails';

const CompleteProfile = [

    {title: 'Degree', placeHolder: 'Degree', key: '3'},
    {title: 'Designation', placeHolder: 'Designation', key: '4'},
    {title: 'Institution', placeHolder: 'Institution', key: '5'},
    {title: 'Speciality', placeHolder: 'Speciality', key: '6'},
    {title: 'Chamber', placeHolder: 'Chamber - 1', key: '7'},
    {title: 'Chamber', placeHolder: 'Chamber - 1', key: '8'},
    {title: 'Chamber', placeHolder: 'Chamber - 1', key: '9'},
]

export default function App() {

    const renderItem = ({item}) => {
        return(
            <View>
                <TextInput placeholder={item.placeHolder} style={styles.textInput} />
                {
                    item.title === 'Chamber' ? 
                    (<View style={{flexDirection: 'row',}}>
                        <Text style={{color: COLORS.textGrey, fontSize: 16}}>Chamber Contact:  </Text>
                        <TextInput placeholder="Contact number" style={[styles.textInput, {flex: 1}]} />
                    </View>) : null
                }
            </View>
        )
    }

    return(
        <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>

            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: normalize(15)}}>
                    <AntDesign name="arrowleft" size={25} color={COLORS.white} />
                </TouchableOpacity>
            </View>

            <View style={{flex: 0.9,}}>
            <ScrollView>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: COLORS.deepBlueHeader, margin: normalize(15)}}>Complete your Profile </Text>
                <View style={{backgroundColor: COLORS.white, width: COLORS.Width, borderRadius: 25, elevation: 4}}>
                    <View style={{padding: normalize(20)}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={{height: 80, width: 80, borderRadius: 50, backgroundColor: COLORS.textGrey,  justifyContent: 'center', alignItems: 'center'}}>
                                <Entypo name="camera" size={25} />
                            </TouchableOpacity>
                            <View style={{flex: 1, marginLeft: normalize(15)}}>
                                <TextInput placeholder="First Name" style={styles.textInput} />
                                <TextInput placeholder="Last Name" style={styles.textInput} />
                            </View>
                        </View>
                        
                        <FlatList
                            data={CompleteProfile}
                            renderItem={renderItem}
                        />
                    </View>

                    <TouchableOpacity style={{backgroundColor: COLORS.deepBlueHeader, width: COLORS.Width, borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 4, padding: normalize(10), alignItems: 'center'}}>
                        <Text style={{fontSize: 18, color: COLORS.textWhite}}>Continue</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: normalize(14),
        padding: normalize(8),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.textInputBorder,
        marginBottom: normalize(15),
    },
});