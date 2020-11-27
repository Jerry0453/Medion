import React, { useState, useRef } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';
export default function BlogComponent1({navigation, item, screenName}) {

    return (
        <TouchableOpacity style={styles.articles} onPress={() => navigation.navigate(screenName)}>
            <Image style={{width: '100%', height: 250, borderRadius: 20, borderColor: COLORS.doctorListHeader}} source={item.img} />
            
            <View style={styles.childCard}>
                <Text style={styles.titleStyle}>{item.title}</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.dateStyle}>{item.date}</Text>
                    <TouchableOpacity style={{backgroundColor: COLORS.doctorListHeader, padding: 3, flexDirection: 'row', justifyContent: 'center', borderRadius: 50,paddingStart: 10, paddingEnd: 20}}>
                        <Entypo name="share" size={25} color="#fff" />
                        <Text style={{color: '#fff', fontSize: normalize(14),}}>  Share</Text>
                    </TouchableOpacity>
                </View>

            </View>

            

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    articles: {
        width: COLORS.Width*0.9,
        elevation: 10,
        borderRadius: 20,
        margin: 15,
        alignSelf: 'center',
    },
    titleStyle: {
        color: '#19769F',
        fontSize: normalize(17),
        fontWeight: 'bold',
        marginLeft: 15,
    },
    dateStyle: {
        color: '#444547', 
        fontSize: normalize(14),
        marginLeft: 15,
    },
    childCard: {
        width: '90%',
        backgroundColor: '#fff',
        opacity: 0.98,
        elevation: 6,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 15,
        borderColor: COLORS.doctorListHeader,
        borderWidth: 0.8,
    },
    fadingContainer: {
        height: Dimensions.get('window').height,
        width: COLORS.Width,
        position: 'absolute',  
        backgroundColor: COLORS.DoctorAppnt_Background,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
