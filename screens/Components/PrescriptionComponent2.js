import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS, { normalize } from '../Constants/colorCode';
import {Picker} from '@react-native-community/picker';
import { color } from 'react-native-reanimated';

export default function PrescriptionComponent2({text}) {
    return(
        <View style={styles.Schedule}>
            <Text style={styles.number}>{text}</Text>
            <View style={{flex: 0.3, justifyContent: 'center'}}>
                <AntDesign name="caretup" size={10} />
                <AntDesign name="caretdown" size={10} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row', borderWidth: 1, borderColor: COLORS.textInputBorder,
        alignItems: 'center', paddingHorizontal: normalize(10), width: '90%', borderRadius: 20, marginBottom: normalize(10)
    },
    Schedule: {
        flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', 
        borderWidth: 1, borderColor: COLORS.textGrey, paddingVertical: normalize(5),
        marginHorizontal: normalize(15), marginVertical: normalize(10), backgroundColor: COLORS.white, elevation: 3
    },
    minus: {
        flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold', borderRightWidth: 1,
    },
    plus: {
        flex: 1, textAlign: 'center',  fontSize: 22, fontWeight: 'bold', borderLeftWidth: 1,
    },
    number: {
        flex: 0.7, textAlign: 'center',  fontSize: 18, fontWeight: '600'
    }
});