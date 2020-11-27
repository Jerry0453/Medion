import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import COLORS, { normalize } from '../Constants/colorCode';

const Services = [
  {image: require('../images/DoctorAppointment.png'), text: 'Doctor Appointment', navPage: 'DoctorList'},
  {image: require('../images/MedicineSupply.png'), text: 'Medicine Supply', navPage: 'DoctorList'},
  {image: require('../images/CallAmbulance.png'), text: 'Call Ambulance', navPage: 'DoctorList'},
  {image: require('../images/DoctorAppointment.png'), text: 'Health Checkup', navPage: 'HealthCheckUp'},
];

const HealthQuestions = [
  {image: require('../images/AskDoctor.png'), text: 'Ask a Doctor', navPage: 'AskQuestion'},
  {image: require('../images/ViewFeed.png'), text: 'View Feed', navPage: 'NewsFeed'},
];

const Blogs = [
  {image: require('../images/sliderImage.png'), text: '***News Description***'},
  {image: require('../images/sliderImage.png'), text: '***News Description***'},
  {image: require('../images/sliderImage.png'), text: '***News Description***'},
];

const DataItem = ({item, navigation, screenName}) => {
  return(
      <TouchableOpacity style={styles.subItemStyle} onPress={() => navigation.navigate(screenName)}>
        <Image style={{height: '70%', width: '70%', borderRadius: normalize(10),marginBottom: normalize(5)}} source={item.image}/>
        <View style={{borderTopWidth: 0.5, height: 0, width: '100%', marginTop: normalize(5)}}></View>
        <Text>{item.text}</Text>
      </TouchableOpacity>
  )
}

export default function Topics({navigation, DoctorList, HealthCheckUp}) {
  return (
    <View style={{width: '100%', paddingStart: normalize(10), paddingEnd: normalize(10)}}>
      <View style={{flexDirection: 'row', width: '100%', overflow: 'hidden'}}>
        <Text style={styles.nameStyle}>Services</Text>
        <View style={styles.straightLine} />
      </View>

      <FlatList
        data={Services}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{alignSelf: 'center'}}
        renderItem={({item}) => <DataItem item={item} navigation={navigation} screenName={item.navPage}/>}
      />
      <View style={{flexDirection: 'row', width: '100%', overflow: 'hidden'}}>
        <Text style={styles.nameStyle}>Health Questions</Text>
        <View style={styles.straightLine} />
      </View>
      <FlatList
        data={HealthQuestions}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{alignSelf: 'center'}}
        renderItem={({item}) => <DataItem item={item} navigation={navigation} screenName={item.navPage}/>}
      />
      <View style={{flexDirection: 'row', width: '100%', overflow: 'hidden'}}>
        <Text style={styles.nameStyle}>Blogs</Text>
        <View style={styles.straightLine} />
      </View>
      <FlatList
        data={Blogs}
        showsVerticalScrollIndicator={false}
        style={{alignSelf: 'center'}}
        renderItem={({item}) => 
          <View style={styles.blogItemStyle}>
            <Image style={{height: '75%', width: '100%',}} source={item.image}/>
            <View style={{borderTopWidth: 0.5, height: 0, width: '100%'}}></View>
            <Text numberOfLines={2} style={{fontFamily: COLORS.font_family, paddingStart: normalize(10), paddingEnd: normalize(10)}}>{item.text}</Text>

          </View>
        }/>


    </View>
  );
}

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: normalize(18),
    fontWeight: "bold",
    fontFamily: COLORS.font_family,
    marginEnd: normalize(5),
  },
  subItemStyle: {
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    borderRadius: 10,
    elevation: 6,
    backgroundColor: COLORS.white,
    margin: normalize(20),
    marginBottom: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  straightLine: {
    alignSelf: 'center',
    marginEnd: normalize(10),
    borderWidth: 0.5,
    borderColor: COLORS.black,
    width: '100%',
    height: 0,
  },
  blogItemStyle: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.25,
    borderRadius: normalize(5),
    backgroundColor: COLORS.white,
    elevation: 12,
    margin: normalize(20),
    overflow: 'hidden'
  }
})