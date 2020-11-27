import React, {useRef, useEffect} from 'react';
import {Button, View, Animated, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';
import DoctorListComponent1 from '../Components/doctorListComponent1';
import DoctorListComponent2 from '../Components/doctorListComponent2';
import VidCallingAppointment from './VidCallingAppointment';
import DocAppointment from './DocAppointment';
const DATA = [
    {text: 'hello'},
    {text: 'hellow'},
    {text: 'hello'},
    {text: 'hellow'},
  ];

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export default function DoctorList({navigation}) {
    return (
        <View style={{flex: 1,backgroundColor: '#F5F5F5'}}>
            
            <View style={{flex: 0.15, backgroundColor: COLORS.doctorListHeader, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: normalize(15)}}>
                    <AntDesign name="arrowleft" size={25} color={COLORS.white} />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: normalize(20), color: COLORS.white}}>Doctors</Text>
                </View>
                <TouchableOpacity style={{padding: normalize(15)}}>
                    <Feather name="filter" size={25} color={COLORS.white} style={{transform: [{rotateY: '180deg'}]}} />
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
                <DoctorListComponent1 text="Doctor, Specialist..." iconName="search" />
                <DoctorListComponent1 text="Select Area" iconName="location" />
                <DoctorListComponent1 text="Select Date" iconName="calendar" />
                <TouchableOpacity style={styles.search}>
                    <Text style={{color: '#fff', fontSize: normalize(14)}}>Search</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{flex: 1,}}>
                <View style={{alignItems: 'center'}}>
                    <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: '#011A30', fontWeight: 'bold', fontSize: normalize(13)}}>All Doctors</Text>
                        <Text style={{color: '#2468F1', fontWeight: 'bold', fontSize: normalize(13)}}>filter</Text>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <DoctorListComponent2 item={item} navigation={navigation} screenName1={VidCallingAppointment} screenName2={DocAppointment}/>}/>
                </View>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
  search: {
    width: Dimensions.get('window').width*0.9,
    height: normalize(30),
    elevation: 3,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.doctorListHeader,
  },
});
