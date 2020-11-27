import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS, { normalize } from '../Constants/colorCode';
import {Picker} from '@react-native-community/picker';
import { color } from 'react-native-reanimated';
import PrescriptionComponent2 from './PrescriptionComponent2';
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';

const medicineList = [
    {name: 'Xinvc B', type: 'tablet', key: '1'},
    {name: 'Xinddvvvdc B', type: 'tablet', key: '2'},
    {name: 'Xinzvdfbfdvdzvc B', type: 'tablet', key: '3'},
    {name: 'Xinsvdsvc B', type: 'tablet', key: '4'},
    {name: 'jbfsjekjsncj B', type: 'tablet', key: '5'},
    {name: 'Xidddbvdjnc B', type: 'tablet', key: '6'},
    {name: 'Xinzdvdzc B', type: 'tablet', key: '7'},
    {name: 'Xinc B', type: 'tablet', key: '8'},
];

export default function PrescriptionComponent1() {
    const [BeforeEating, setBeforeEating] = useState(true)
    const renderItem = ({item}) => {
        return(
            <View style={{backgroundColor: COLORS.white, flexDirection: 'row', alignItems: 'center', borderRadius: 5, padding: normalize(5), marginRight: normalize(12), marginBottom: normalize(10), }}>
                <Text style={{fontSize: 15, color: COLORS.textlightBlue}}>{item.name} </Text>
                <Text style={{fontSize: 15, color: COLORS.textGrey}}>({item.type}) </Text>
                <AntDesign name="down" size={15} />
            </View>
        )
    }
    return(
        <View style={{padding: normalize(10),alignItems: 'center', flex: 1,}}>

            <View style={styles.search}>
                <FontAwesome name="search" size={18} color={COLORS.textlightBlue} />
                <TextInput placeholder="Search" style={{padding: 0, fontSize: 16, marginHorizontal: normalize(5)}} />
            </View>

            <View style={{flex: 0.3, width: '100%', }}>
                <ScrollView 
                    horizontal={true} 
                    persistentScrollbar={true} 
                    style={{backgroundColor: '#E5E7E9', elevation: 2, padding: normalize(8)}}>
                    <FlatList
                        data={medicineList}
                        persistentScrollbar={true}
                        numColumns={2}
                        renderItem={renderItem}
                    />
                </ScrollView>
            </View>

            <View style={{flex: 0.7, width: '100%',}}>
                <ScrollView persistentScrollbar={true} style={{backgroundColor: '#E5E7E9', width: '100%', elevation: 2, padding: normalize(8), marginVertical: normalize(10)}}>
                    <View style={{borderBottomWidth: 4, borderBottomColor: '#fff'}}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 19, color: COLORS.textDeepBlue, fontWeight: 'bold'}}>1. Tab. Nexum MUPS 20mg</Text>
                            <AntDesign style={{alignSelf: 'flex-end'}} name="closecircle" size={18} color='#CB4335' />
                        </View>
                        <Text style={{marginLeft: normalize(20), fontSize: 18}}>Schedule:</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <PrescriptionComponent2 text={'1'}/>
                            <Text style={{fontSize: 20}}>+</Text>
                            <PrescriptionComponent2 text={'0'}/>
                            <Text style={{fontSize: 20}}>+</Text>
                            <PrescriptionComponent2 text={'1'}/>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity 
                                style={{flex: 1, padding: normalize(8), marginLeft: normalize(15), backgroundColor: '#2E69B6', borderWidth: 1, borderColor: COLORS.deepBlueHeader, alignItems: 'center', alignSelf:'center', opacity: 1}} 
                                onPress={() => setBeforeEating(!BeforeEating)}>
                                {BeforeEating === true ? <Text style={{color: COLORS.white, fontSize: 16}}>খাবার আগে</Text> : 
                                    <Text style={{color: COLORS.white, fontSize: 16}}>খাবার পরে</Text>}
                            </TouchableOpacity>

                            <Text style={{marginLeft: normalize(20), fontSize: 18}}>        Unit: </Text>
                            <PrescriptionComponent2 text={'টা'} />
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{marginLeft: normalize(20), fontSize: 18}}>Duration:</Text>
                            <PrescriptionComponent2 text={'1'}/>
                            <PrescriptionComponent2 text={'মাস'}/>
                        </View>

                        <View style={[styles.search, {alignSelf: 'center', marginTop: normalize(15)}]}>
                            <FontAwesome name="search" size={18} color={COLORS.textlightBlue} />
                            <TextInput placeholder="Search/Add Remarks" style={{color: COLORS.textlightBlue, padding: 0, fontSize: 15, marginHorizontal: normalize(5)}} />
                        </View>

                    </View> 
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.textlightBlue,
        alignItems: 'center', paddingHorizontal: normalize(10), width: '90%', borderRadius: 20, marginBottom: normalize(10)
    },
    Schedule: {
        flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1,
        marginHorizontal: normalize(15), marginVertical: normalize(10)
    },
    minus: {
        flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold', borderRightWidth: 1,
    },
    plus: {
        flex: 1, textAlign: 'center',  fontSize: 22, fontWeight: 'bold', borderLeftWidth: 1,
    },
    number: {
        flex: 1, textAlign: 'center',  fontSize: 18, fontWeight: '600'
    }
});