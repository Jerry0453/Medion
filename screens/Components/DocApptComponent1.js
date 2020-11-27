import  React, { useState } from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';

export default function DocApptComponent1({settings, navigation, screenName}) {
  const settings1 = () => {
    settings();
    navigation.navigate(screenName);
  }
    return (
      <View>

          <Image style={{margin: 25, alignSelf: 'center'}} source={require('../images/33.png')} />
          <Text style={{color: '#19769F', fontWeight: 'bold', fontSize: normalize(20), alignSelf: 'center', marginBottom: 20,}}>Log in to continue</Text>
          <Text style={{marginStart: 10, color: '#979A9A'}}>Username or Email</Text>
          <TextInput placeholder="Username/Email/numer" style={styles.textInputStyle} />
          <Text style={{marginStart: 10, color: '#979A9A'}}>Password</Text>
          <TextInput placeholder="Password" style={styles.textInputStyle} />

          <TouchableOpacity onPress={() => settings1()} style={styles.logInButton}>
            <Text style={{fontSize: normalize(13), color: '#fff', fontWeight: 'bold'}}>Apply</Text>
          </TouchableOpacity>
          
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{marginStart: 10, color: '#979A9A', fontSize: 16}}>Don't have an account!  </Text>
            <Text style={{marginStart: 10, color: '#19769F', fontSize: 16}}>Sign Up</Text>
          </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    textInputStyle: {
      fontSize: normalize(14),
      padding: 8,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#979A9A',
      marginBottom: 15,
    },
    logInButton: {
      height: 50, 
      width: Dimensions.get('window').width*0.92-60,
      backgroundColor: '#053871', 
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 25,
      marginBottom: 10,
    }
});
  