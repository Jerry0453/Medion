import  React, { useState } from 'react';
import {Button, View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS, {normalize} from '../Constants/colorCode';
import moment from 'moment';
import DocApptComponent1 from '../Components/DocApptComponent1';
import VideoCallingInfo from './VideoCallingInfo';

const AvailableTime = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "9:30 AM",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "9:30 AM",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "9:30 AM",
    },
    {
      id: "dnvbsjdkvb-3da1-471f-bd96-145571e29d72",
      title: "9:30 AM",
    },
    {
      id: "58694anvkjdvbjkvb0f-3da1-471f-bd96-145571e29d72",
      title: "9:30 AM",
    },
  ];


const VidCallingAppointment = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(null);
    const day = moment(Date);
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#19769F" : "#fff";
        const color = item.id === selectedId ? '#fff' : '#19769F';
    
        return (
            <TouchableOpacity onPress={() => setSelectedId(item.id)} style={{backgroundColor, padding: 10, margin: 10, borderRadius: 10, borderWidth: 2, borderColor: '#19769F'}}>
                <Text style={{color, fontSize: normalize(15)}}>{item.title}</Text>
            </TouchableOpacity>
        );
      };

      const settings = () => {
        setModalVisible(false);
      }

    return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.ModalviewStyle}>

                <TouchableOpacity onPress={() => {setModalVisible(false);}}>
                  <Feather style={{alignSelf: 'flex-end'}} name="x" size={30} color={COLORS.doctorListHeader} />
                </TouchableOpacity>

                <DocApptComponent1 settings={settings} navigation={navigation} screenName={VideoCallingInfo}/>
              </View>
            </View>
      </Modal>

      <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                <AntDesign name="arrowleft" size={30} color={COLORS.white} />
            </TouchableOpacity>
            <View>
                <Text style={{fontSize: normalize(20), color: COLORS.white}}>Appointment</Text>
            </View>
        </View>

        <View style={{flex: 0.9}}>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                        <View style={{elevation: 6, marginBottom: 15, backgroundColor: COLORS.white,alignItems: 'center', width: Dimensions.get('window').width, borderBottomStartRadius: 30, borderBottomEndRadius: 30}}>
                        <View style={{elevation: 6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.doctorListHeader, padding: normalize(15), borderBottomStartRadius: 30, borderBottomEndRadius: 30}}>
                            <View style={styles.profilePicBorder}>
                                <Image style={styles.profilePic} source={require('../images/doc.jpg')} />
                            </View>
                        <View style={{flex: 1, marginStart: normalize(15), overflow: 'hidden'}}>
                            <Text style={{color: '#fff', fontSize: normalize(18), fontWeight: 'bold'}}>Doctor's Name</Text>
                            <Text style={{color: '#fff', fontSize: normalize(15)}}>Cardiologist</Text>
                            <Text style={{color: '#fff', fontSize: normalize(14)}}>MBBS(CMC), BCS(Health), MD(in course)</Text>
                            <Text style={{color: '#fff', fontSize: normalize(14)}}>Lecturer, Dhaka Medical College</Text>
                            <Text style={{color: '#fff', fontSize: normalize(14)}}>Chamber: Labaid Hospital, Dhaka Medical College</Text>
                        </View>
                        </View>
                        <View style={{elevation: 4,backgroundColor: COLORS.white, width: Dimensions.get('window').width, borderBottomStartRadius: 30, borderBottomEndRadius: 30, alignItems: 'center', padding: normalize(15)}}>
                        <Text style={{color: '#19769F', fontSize: normalize(18)}}>Consultation Free: 500 BDT</Text>
                    </View>
                        </View>

                    <View style={{width: Dimensions.get('window').width, marginBottom: 20}}>
                        <Text style={{color: '#011A30', fontSize: normalize(18), marginBottom: 10, marginLeft: 10 }}>Appointment Schedule</Text>
                        <CalendarPicker
                            dayLabelsWrapper={{borderBottomWidth: 0, borderTopWidth: 0}}
                            previousComponent={<AntDesign name="left" size={20} color="#000"/>}
                            nextComponent={<AntDesign name="right" size={20} color="#000"/>}
                            selectedDayColor="#19769F"
                            minDate={moment().startOf('day')}
                            maxDate={new Date(moment().add(1, 'months').startOf('day'))}
                        />
                    </View>
                    <View style={{elevation: 6, backgroundColor: '#fff', width: Dimensions.get('window').width, borderTopStartRadius: 30, borderTopEndRadius: 30,}}>
                        <View style={{backgroundColor: '#fff', width: Dimensions.get('window').width, padding: 25, borderTopStartRadius: 30, borderTopEndRadius: 30}}>
                            <Text style={{color: '#19769F', fontSize: normalize(16)}}>Select availble time</Text>
                            <FlatList
                                data={AvailableTime}
                                horizontal={true}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                        <TouchableOpacity onPress={() => {setModalVisible(true);}} style={{elevation: 6, backgroundColor: COLORS.doctorListHeader, alignItems: 'center', width: Dimensions.get('window').width, borderTopStartRadius: 30, borderTopEndRadius: 30, padding: 15}}>
                            <Text style={{color: '#fff', fontSize: normalize(18)}}>Confirm Schedule</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </ScrollView>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalviewStyle: {
    width: Dimensions.get('window').width*0.90,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    elevation: 100,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  
  profilePic: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
},
profilePicBorder: {
    height: 110,
    width: 110,
    borderRadius: 105/2,
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
});

export default VidCallingAppointment;
