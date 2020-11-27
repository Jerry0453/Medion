import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from '../Constants/colorCode';
import NewsFeed from './NewsFeed';

export default function AskQuestion({navigation}) {
    return(
        <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background}}>
            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <Text style={{fontSize: normalize(20), color: COLORS.white}}>Ask A Question</Text>
                </View>
            </View>

            <View style={{flex: 0.9, backgroundColor: '#fff', padding: 15}}>
                <ScrollView>

                    <Text style={{color: '#19769F', fontSize: normalize(18), fontWeight: 'bold', marginBottom: 10}}>স্বাস্থ্য জিজ্ঞাসা</Text>
                    <Text style={{color: '#444547', fontSize: normalize(15),}}>স্বাস্থ্য বিষয়ক যেকোনো প্রশ্ন করতে নিচের ফর্ম টি পূরন করুন। আমাদের সম্মানিত ডাক্তাররা আপনার প্রশ্নের উত্তর দিবেন। আপনার প্রশ্ন টি বাংলা অথবা ইংরেজি যেকোনো ভাষায় করতে পারবেন।</Text>
                    <Text style={{color: '#444547', fontSize: normalize(15), marginBottom: 20}}>বি.দ্র : আপনার প্রশ্ন এবং এর উত্তর ওয়েবসাইট এ পাবলিশ এর ব্যাপারে কর্তৃপক্ষ সিদ্ধান্ত নিবে।</Text>
                    
                    <View style={{elevation: 4,padding: 10, marginBottom: 10, backgroundColor: COLORS.DoctorAppnt_Background, borderColor: '#19769F', borderWidth: 1, borderRadius: 15}}>
                        <Text style={styles.name_emailStyle}>Name:</Text>
                        <TextInput style={styles.name_emailInput} placeholder="Enter your Name" />
                        <Text style={styles.name_emailStyle}>Email:</Text>
                        <TextInput style={styles.name_emailInput} placeholder="address@gmail.com" />
                        <Text style={styles.name_emailStyle}>Question:</Text>
                        <TextInput multiline={true} numberOfLines={15} maxLength={2000} style={styles.quesInputStyle} placeholder="Enter your question here" />

                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={{fontSize: normalize(16), color: '#fff'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate(NewsFeed)} style={{flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center'}}>
                        <Text style={{fontSize: normalize(15), color: '#19769F'}}>View News Feed  </Text>
                        <AntDesign name="arrowright" size={20} color="#19769F" />
                    </TouchableOpacity>

                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    name_emailStyle: {
        color: '#444547',
        fontSize: normalize(15),
        marginBottom: 10
    },
    name_emailInput: {
        backgroundColor: '#fff', 
        borderWidth: 0.8, 
        borderColor: '#979A9A', 
        marginBottom: 10,
        fontSize: normalize(15),
        borderRadius: 5,
    },
    quesInputStyle: {
        height: 300,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
        borderWidth: 0.8, 
        borderColor: '#979A9A',
        marginBottom: 10,
        fontSize: normalize(15),
        borderRadius: 5,
    },
    submitButton: {
        padding: 10,
        paddingStart: 20, paddingEnd: 20,
        backgroundColor: COLORS.doctorListHeader,
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginBottom: 10
    }
});