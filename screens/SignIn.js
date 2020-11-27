import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from './Constants/colorCode';
import BlogComponent1 from './Components/BlogComponent1';
import BlogDetails from './BlogDetails';

const logIn = [
    {title: 'Email', placeHolder: 'E-mail Address', key: '1'},
    {title: 'Password', placeHolder: 'Enter Password', key: '2'},
    {title: 'Button', placeHolder: 'Sign In', key: '3'},
]

export default function App() {
    const renderItem = ({item}) => {
        if(item.title === 'Button'){
            return (<TouchableOpacity style={styles.signInButton}>
                <Text style={{color: COLORS.textWhite, fontSize: normalize(16)}}>{item.placeHolder}</Text>
            </TouchableOpacity>)
        } else{
            return (
                <View>
                    <Text style={{color: COLORS.textInputBorder, margin: normalize(5), fontSize: normalize(14),}}>{item.title}</Text>
                    <TextInput placeholder={item.placeHolder} style={styles.textInput} />
                </View>
            )
        }
    }

    return(
        <View style={{flex: 1}}>

            {/* Background Design start */}
            <View style={styles.firstHalf} />
            <View style={styles.FirstAngle} />
            {/* Background Design end */}

            <View style={styles.Materials}>
                
                {/* welcome */}
                <Text style={{fontSize: normalize(23), color: COLORS.textWhite, fontWeight: 'bold', marginLeft: normalize(15)}}>Welcome</Text>
                <Text style={{fontSize: normalize(17), color: COLORS.textWhite, marginLeft: normalize(15),}}>Log in to continue</Text>
                
                <View style={styles.logInMaterials}>
                    <FlatList
                        data={logIn}
                        renderItem={renderItem}
                    />
                    <Text style={{color: COLORS.textInputBorder, alignSelf: 'flex-end', marginTop: normalize(10)}}>Forgot Password?</Text>
                </View>

                {/* SignUp */}
                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: normalize(30) }}>
                    <Text style={{fontSize: normalize(14)}}>Create Account? </Text>
                    <TouchableOpacity>
                        <Text style={{color: COLORS.deepBlueHeader, fontSize: normalize(14)}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    firstHalf: {
        flex: 0.6,
        backgroundColor: COLORS.deepBlueHeader,
    },
    FirstAngle: {
        width: 0,
        height: 0,
        borderLeftWidth: COLORS.Width,
        borderBottomWidth: 80,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: COLORS.deepBlueHeader,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    Materials: {
        position: 'absolute',
        justifyContent: 'center',
        top: 0, bottom: 0, left: 0, right: 0,
    },
    logInMaterials: {
        width: COLORS.Width-normalize(30),
        backgroundColor: COLORS.white,
        marginLeft: normalize(15),
        marginTop: normalize(20),
        padding: normalize(25),
        borderRadius: 10,
        elevation: 10,
    },
    textInput: {
        fontSize: normalize(14),
        padding: normalize(8),
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.textInputBorder,
        marginBottom: normalize(15),
    },
    signInButton: {
        backgroundColor: COLORS.deepBlueHeader,
        padding: normalize(10),
        alignItems: 'center',
        borderRadius: 10,
        marginTop: normalize(10),
    }
});