import  React, { useState } from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: require('../images/33.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: require('../images/33.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: require('../images/33.png'),
    },
    {
        id: '58694a0f-3dzshbcja1-471f-bd96-145571e29d72',
        title: require('../images/33.png'),
      },
      {
        id: '58694a0f-3da1-471f-bdzcjkbsdjcb96-145571e29d72',
        title: require('../images/33.png'),
      },
  ];

export default function MobileBankingPayment() {

    const renderItem = ({ item }) => (
        <View style={{justifyContent: 'center', alignItems: 'center', padding: 15, height: Dimensions.get('window').width*0.165, width: Dimensions.get('window').width*0.33}}>
            <Image style={{height: '100%', width: '100%'}} source={item.title} />
        </View>
      );

    return (
      <View style={{alignItems: 'center'}}>
          <FlatList
                data={DATA}
                numColumns={3}
                renderItem={renderItem}
            />
      </View>
    );
  }

  const styles = StyleSheet.create({
    
});
  