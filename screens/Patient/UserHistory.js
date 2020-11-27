import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from '../Constants/colorCode';
import {Picker} from '@react-native-community/picker';
import UserHistoryComponent1 from '../Components/UserHistoryComponent1';
import UserHistoryComponent2 from '../Components/UserHistoryComponent2';
import UserHistoryComponent3 from '../Components/UserHistoryComponent3';

export default function App() {
    const [selected, setSelected] = useState('1');

    return(
        <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: normalize(15)}}>
                    <AntDesign name="arrowleft" size={25} color={COLORS.white} />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: normalize(20), color: COLORS.white}}>History</Text>
                </View>
            </View>

            <View style={{flex: 0.9,}}>
                <ScrollView>
                    
                    <View style={{flexDirection: 'row', marginTop: normalize(10),}}>
                        <TouchableOpacity style={styles.history_orderBtn} onPress={() => setSelected('1')}>
                            <Text style={styles.textStyle}>Appointment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.history_orderBtn} onPress={() => setSelected('2')}>
                            <Text style={styles.textStyle}>Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.history_orderBtn} onPress={() => setSelected('3')}>
                            <Text style={styles.textStyle}>Subscription</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                    {selected === '1' ? 
                    <UserHistoryComponent1 /> : selected === '2' ? <UserHistoryComponent2 />  : <UserHistoryComponent3 />}
                    </View>
                </ScrollView>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    history_orderBtn: {
        flex: 1,
        paddingVertical: normalize(10),
        marginHorizontal: normalize(8),
        borderRadius: 10,
        backgroundColor: COLORS.deepBlueHeader,
        elevation: 4,
    },
    textStyle: {
        color: COLORS.textWhite, 
        fontSize: 15, 
        textAlign: 'center',
    }
});