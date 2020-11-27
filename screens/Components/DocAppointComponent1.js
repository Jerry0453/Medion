import  React, { useState } from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {Picker} from '@react-native-community/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-datepicker';
import COLORS, {normalize} from '../Constants/colorCode';

export default function DocAppointComponent1() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');
    const [selectedValue4, setSelectedValue4] = useState('');

    const timeData = [
        { id: "1", title: "9:30 AM",},
        { id: "2", title: "9:30 AM",},
        { id: "3", title: "9:30 AM",},
      ];
    const dateData = [
        { id: "1", title: "25-09-2020",},
        { id: "2", title: "12-10-2020",},
        { id: "3", title: "11-10-2020",},
      ];
    const chamberData = [
        { id: "1", title: "LabAid",},
        { id: "2", title: "DMC",},
        { id: "3", title: "Padma",},
      ];

    return (
        <View style={{width: Dimensions.get('window').width, padding: 15,}}>
            <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Name</Text>
            <TextInput placeholder="Name" style={styles.refId} />
            <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Age</Text>
            <TextInput placeholder="Age" style={styles.refId} />
            <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Gender</Text>
            <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue1}
                    style={{color: '#979A9A'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                    >
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Male" value="Male" />
                </Picker>
            </View>
            <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Phone</Text>
            <TextInput placeholder="phone Number" style={styles.refId} />
            <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Type</Text>
            <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue2}
                    style={{color: '#979A9A'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                    >
                    <Picker.Item label="New" value="New" />
                    <Picker.Item label="Old" value="Old" />
                </Picker>
            </View>
            <Text style={{marginStart: 10, color: '#979A9A'}}>Select Chamber</Text>
            <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue3}
                    style={{color: '#979A9A'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
                    >
                    {chamberData.map(acct => <Picker.Item key={acct.id} label={acct.title} value="acct.title" />)}
                </Picker>
            </View>            
            <Text style={{marginStart: 10, color: '#979A9A'}}>Select Date</Text>
            <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue4}
                    style={{color: '#979A9A'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
                    >
                    {dateData.map(acct => <Picker.Item key={acct.id} label={acct.title} value="acct.title" />)}
                </Picker>
            </View>
            <Text style={{marginStart: 10, color: '#979A9A'}}>Select Time</Text>
            <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue}
                    style={{color: '#979A9A'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    {timeData.map(acct => <Picker.Item key={acct.id} label={acct.title} value="acct.title" />)}
                </Picker>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    refId: {
        fontSize: normalize(14),
        padding: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#979A9A',
        marginBottom: 15,
        marginEnd: '2%',
    },
    picker: {
        fontSize: normalize(14),
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#979A9A',
        marginBottom: 15,
        marginEnd: '2%',
    }
});
  