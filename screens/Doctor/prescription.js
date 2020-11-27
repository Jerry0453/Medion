import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS, { normalize } from '../Constants/colorCode';
import {Picker} from '@react-native-community/picker';
import PrescriptionComponent1 from '../Components/PrescriptionComponent1';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const data = [
    {title: 'medicine name', time: ''}
]


export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={{flex: 1}}>

            <ScrollView>

                <View style={{paddingLeft: normalize(15), paddingTop: normalize(15)}}>
                    <AntDesign name="close" size={30} color={COLORS.deepBlueHeader} />
                </View>

                <View style={{alignItems: 'center',}}>
                    <Text style={{fontSize: 20, color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>Doctor's Name</Text>
                    <Text style={{fontSize: 16, color: '#024614',}}>degrees & Speciality</Text>
                    <Text style={{fontSize: 19, color: COLORS.deepBlueHeader, fontWeight: 'bold'}}>Chamber Name</Text>
                    <Text>Address</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: normalize(10), marginVertical: normalize(8)}}>
                    <Text>Patient name: </Text>
                    <TextInput placeholder="Name"  style={{borderBottomWidth: 0.5, flex: 1, padding: 0}}/>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: normalize(10)}}>
                    <Text>Age: </Text>
                    <TextInput placeholder="Age"  style={{borderBottomWidth: 0.5, flex: 1, padding: 0}}/>
                    <Text>date: </Text>
                    <TextInput placeholder="Date"  style={{borderBottomWidth: 0.5, flex: 1, padding: 0}}/>
                </View>

                <View style={styles.container}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 16}}>Rx </Text>
                        <Text style={{fontSize: 16}}>+</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 20}}>১ + ১ + ১ - - - - - - - - -</Text>
                    </View>
                </View>



            </ScrollView>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: normalize(10),
        margin: normalize(10),
        borderWidth: 0.8,
        marginVertical: normalize(10),
    },
});