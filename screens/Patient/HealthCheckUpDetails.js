import React, {useRef, useEffect, useState} from 'react';
import {Button, View, CheckBox, Image, Animated, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, { normalize } from '../Constants/colorCode';

const Tests = [
    {name: 'Complete Hemogram', key: '1'},
    {name: 'ECG', key: '2'},{name: 'Fasting Blood Sugar', key: '3'},{name: 'Lipid Profile', key: '4'},
    {name: 'ESR', key: '5'},{name: 'Blood grouping & RH factor', key: '6'},{name: '(Total Cholesterol/HDL Cholesterol)', key: '7'},
    {name: 'Serum Bilirubin (Total)', key: '8'},
];
const ids = [];
export default function HealthCheckUpDetails({navigation}) {

    const [isSelected, setSelection] = useState(false);

    const renderItem = ({item}) => {
        const checked = isSelected === item.key ? setSelection(true) : setSelection(false);
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: normalize(10)}}>
                <CheckBox
                    value={isSelected}
                    onValueChange={checked}
                    style={styles.checkbox}
                    />
                <Text style={{fontSize: 18, marginHorizontal: normalize(10)}}>{item.name}</Text>
            </View>
        )
    }
  return (
    <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background}}>
        <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: normalize(15)}}>
                <AntDesign name="arrowleft" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={{fontSize: normalize(20), color: COLORS.white}}>Details</Text>
            </View>
        </View>

        <View style={{flex: 0.9}}>
            <View style={{padding: normalize(15)}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderBottomColor: COLORS.textInputBorder}}>
                    <Text style={styles.textStyle}>Total amount of tests</Text>
                    <Text style={styles.textStyle}>48 tests</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderBottomColor: COLORS.textInputBorder}}>
                    <Text style={styles.textStyle}>Cost of the package</Text>
                    <Text style={styles.textStyle}>Taka 4500/=</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity style={{marginHorizontal: normalize(15), backgroundColor: COLORS.deepBlueHeader, 
                                        padding: normalize(8), alignItems: 'center', borderRadius: 8}}>
                    <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>Book</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <ScrollView>
                    <Text style={{fontSize: 20, color: COLORS.textlightBlue, marginVertical: normalize(10)}}>This package includes following tests:</Text>
                    <FlatList
                        data={Tests}
                        renderItem={renderItem}
                    />
                    
                </ScrollView>
            </View>

        </View>


    </View>
  );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textDeepBlue,
        marginVertical: normalize(8),
    },
    listContainer: {
        width: COLORS.Width,
        flex: 1,
        elevation: 6,
        borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: COLORS.white, marginTop: normalize(20), padding: normalize(20)
    },
    checkbox: {
        alignSelf: "center",
    },
})