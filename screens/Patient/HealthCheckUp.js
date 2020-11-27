import React, {useRef, useEffect} from 'react';
import {Button, View, Image, Animated, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, { normalize } from '../Constants/colorCode';

const Data = [
    {title: 'Senior Citizen', img: require('../images/senior_citizen.jpg'), nav: 'HealthCheckUpDetails', tests: [{name: 'urine test'}, {name: 'blood test'}], key: '1'},
    {title: 'Working Women', img: require('../images/senior_citizen.jpg'), nav: 'HealthCheckUpDetails',  tests: [{name: 'urine test'}, {name: 'blood test'}], key: '2'},
    {title: 'Professional', img: require('../images/senior_citizen.jpg'), nav: 'HealthCheckUpDetails',  tests: [{name: 'urine test'}, {name: 'blood test'}], key: '3'},
    {title: 'Young Individual', img: require('../images/senior_citizen.jpg'), nav: 'HealthCheckUpDetails',  tests: [{name: 'urine test'}, {name: 'blood test'}], key: '4'},
];

const DataItem = ({item, navigation, screenName}) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate(screenName)} style={styles.container}>
            <Image style={{height: COLORS.Width*0.4, width: COLORS.Width*0.4}} source={item.img} />
            <Text style={{marginTop: normalize(10), fontSize: 16, textAlign: 'center'}}>{item.title} Health Checkup</Text>
        </TouchableOpacity>
    )
}
export default function HealthCheckUp({navigation}) {
  return (
    <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background}}>
        <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: normalize(15)}}>
                <AntDesign name="arrowleft" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={{fontSize: normalize(20), color: COLORS.white}}>Health CheckUp</Text>
            </View>
        </View>

        <View style={{flex: 0.9,}}>
            <ScrollView>
                <View style={{alignItems: 'center', marginTop: normalize(15)}}>
                    <FlatList
                        data={Data}
                        numColumns={2}
                        renderItem={({item}) => <DataItem item={item} navigation={navigation} screenName={item.nav}/>}
                    />
                </View>
            </ScrollView>

        </View>


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: normalize(15),
        marginHorizontal: normalize(10),
        backgroundColor: COLORS.white,
        width: COLORS.Width*0.44,
        height: COLORS.Width*0.6,
        elevation: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }

})