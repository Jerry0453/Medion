import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from './Constants/colorCode';
import {Picker} from '@react-native-community/picker';
import BlogComponent1 from './Components/BlogComponent1';
import BlogDetails from './BlogDetails';

const logIn = [
    {title: 'userName', placeHolder: 'UserName', key: '1'},
    {title: 'Email or phone', placeHolder: 'Email or Phone', key: '2'},
    {title: 'Picker', placeHolder: 'Sign Up As', key: '3'},
    {title: 'Password', placeHolder: 'Password', key: '4'},
    {title: 'Re-enter password', placeHolder: 'Re-enter password', key: '5'},

]

export default function App() {
    const [selectedValue, setSelectedValue] = useState('Sign Up As');
    const renderItem = ({item}) => {
        if(item.title === 'Picker'){
            return(
                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedValue}
                        
                        style={{color: COLORS.textInputBorder, padding: normalize(0),}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                        <Picker.Item label="Doctor" value="Doctor" />
                        <Picker.Item label="Patient" value="Patient" />
                    </Picker>
                </View>
            )
        } else{
            return (
                <View>
                    <TextInput placeholder={item.placeHolder} style={styles.textInput} />
                </View>
            )
        }
    }

    return(
        <View style={{flex: 1}}>

            <View style={styles.firstHalf} />
            <View style={styles.FirstAngle} />

            <View style={styles.Materials}>

                <Text style={{fontSize: normalize(23), color: COLORS.textWhite, fontWeight: 'bold', marginLeft: normalize(20)}}>Sign Up</Text>
                <Text style={{fontSize: normalize(17), color: COLORS.textWhite, marginLeft: normalize(20),}}>Create new account</Text>
                
                <View style={styles.logInMaterials}>
                    <FlatList
                        data={logIn}
                        renderItem={renderItem}
                    />
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={{color: COLORS.textWhite, fontSize: normalize(16)}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: normalize(30) }}>
                    <Text style={{fontSize: normalize(14)}}>Have Account? </Text>
                    <TouchableOpacity>
                        <Text style={{color: COLORS.deepBlueHeader, fontSize: normalize(14)}}> Sign In</Text>
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
        width: COLORS.Width-normalize(40),
        backgroundColor: COLORS.white,
        marginLeft: normalize(20),
        marginTop: normalize(20),
        padding: normalize(25),
        paddingTop: normalize(35),
        borderRadius: 10,
        elevation: 10,
    },
    textInput: {
        fontSize: normalize(14),
        padding: normalize(8),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.textInputBorder,
        marginBottom: normalize(15),
    },
    picker: {
        fontSize: normalize(14),
        borderWidth: 1,
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