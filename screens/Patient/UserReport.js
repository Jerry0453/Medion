import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import COLORS, { normalize } from '../Constants/colorCode';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Picker} from '@react-native-community/picker';


const ReportsFiles = [
    {fileName: 'report1.pdf', fileType: 'pdf', date: '20-6-2019', type: 'Uploaded', key: '1'},
    {fileName: 'report3.pdf', fileType: 'image', date: '20-6-2019', type: 'Uploaded', key: '2'},
    {fileName: 'report2.jpg', fileType: 'image', date: '29-6-2019', type: 'nonUploaded', key: '3'},
];

const option = [
    {title: 'Uploads', key: '1'}, {title: 'health CheckUp', key: '2'},
];

export default function App() {
    const [selected, setSelected] = useState('1');

    const renderItem3 = ({item}) => {
        const backgroundColor = selected === item.key ? COLORS.deepBlueHeader : null;
        const color = selected === item.key ? COLORS.white : COLORS.deepBlueHeader;
        return(
            <TouchableOpacity onPress={() => setSelected(item.key)}
                style={{width: COLORS.Width*0.48, borderColor: COLORS.deepBlueHeader, borderWidth: 2, alignItems: 'center', margin: normalize(5), borderRadius: 5, backgroundColor, marginTop: normalize(20), paddingVertical: normalize(8) }}>
                <Text style={{color}}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({item}) => {
        if(item.type === 'Uploaded'){
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: normalize(20), paddingVertical: normalize(10), borderBottomWidth: 0.5, borderBottomColor: '#B4D3FC'}}>
                    {item.fileType === 'pdf' ? 
                    ( <AntDesign name="pdffile1" size={25} color={COLORS.textGrey} /> ) : <Feather name="image" size={25} color={COLORS.textGrey} /> }
                    <View style={{marginLeft: normalize(20),}}>
                        <Text style={{ fontSize: 17}}>{item.fileName}</Text>
                        <Text style={{color: COLORS.textGrey}}>{item.date}</Text>
                    </View>
                    <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Fontisto style={{marginRight: normalize(15)}} name="preview" size={20} color={COLORS.textGrey} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                        <AntDesign name="closecircle" size={20} color={COLORS.textGrey} />
                    </TouchableOpacity>
                </View>
            )
        }
    }

    const renderItem1 = ({item}) => {
        if(item.type === 'nonUploaded'){
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: normalize(20), paddingVertical: normalize(10), borderBottomWidth: 0.5, borderBottomColor: '#B4D3FC'}}>
                    {item.fileType === 'pdf' ? 
                    ( <AntDesign name="pdffile1" size={25} color={COLORS.textGrey} /> ) : <Feather name="image" size={25} color={COLORS.textGrey} /> }
                    <View style={{marginLeft: normalize(20),}}>
                        <Text style={{ fontSize: 17}}>{item.fileName}</Text>
                        <Text style={{color: COLORS.textGrey}}>{item.date}</Text>
                    </View>
                    <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Fontisto style={{marginRight: normalize(15)}} name="preview" size={20} color={COLORS.textGrey} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                        <AntDesign name="closecircle" size={20} color={COLORS.textGrey} />
                    </TouchableOpacity>
                </View>
            )
        }
    }

    return(
        <View style={{flex: 1}}>

            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: normalize(19), color: COLORS.white}}>Reports</Text>
                </View>
            </View>

            <View style={{flex: 0.9}}>
                <ScrollView>
                    
                    <View style={{width: COLORS.Width* 0.9, backgroundColor: COLORS.white, elevation: 4, borderRadius: 20,
                                alignSelf: 'center', justifyContent: 'center', marginVertical: normalize(15), padding: normalize(15)}}>
                        <View style={{borderColor: COLORS.textInputBorder, borderWidth: 0.4, borderRadius: 15, alignItems: 'center', alignSelf: 'center', padding: normalize(15), width: COLORS.Width*0.8}}>
                            <Feather name="upload" size={30} style={{backgroundColor: COLORS.white, elevation: 6, padding: normalize(10), borderRadius: 50, marginBottom: normalize(10)}} />
                            <TouchableOpacity style={{padding: normalize(8), paddingHorizontal: normalize(20), backgroundColor: COLORS.deepBlueHeader, borderRadius: normalize(10)}}>
                                <Text style={{color: COLORS.textWhite, fontSize: 16}}>Choose File</Text>
                            </TouchableOpacity>
                            <Text style={{color: COLORS.textGrey}}>(File Name, e.g. 123.jpg)</Text>
                        </View>
                        <Text style={{color: COLORS.textGrey, fontSize: 16, fontWeight: 'bold', marginTop: normalize(15), marginLeft: normalize(15),}}>Send to: </Text>
                        <TextInput placeholder="Enter Doctor's Name" style={styles.textInput} />
                        <TouchableOpacity style={{padding: normalize(10), marginHorizontal: normalize(10), backgroundColor: COLORS.deepBlueHeader, borderRadius: normalize(10)}}>
                            <Text style={{color: COLORS.textWhite, fontSize: 17, alignSelf: 'center'}}>Send</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', width: '100%', overflow: 'hidden', paddingHorizontal: normalize(10)}}>
                        <Text style={{color: COLORS.textDeepBlue, fontSize: 18, fontWeight: 'bold'}}>Previous Files</Text>
                        <View style={styles.straightLine} />
                    </View>

                    <View>
                        <FlatList
                            data={option}
                            horizontal={true}
                            renderItem={renderItem3}
                        />
                    </View>

                    {selected === '1' ? (
                    <View>
                        <View style={[styles.ArrowStyle, {marginLeft: COLORS.Width*0.25}]} />
                        <View style={styles.container2}>
                            <FlatList
                                data={ReportsFiles}
                                renderItem={renderItem}
                            />
                        </View> 
                    </View>) : (
                        <View>
                        <View style={[styles.ArrowStyle, {marginLeft: COLORS.Width*0.75}]} />
                        <View style={styles.container2}>
                            <FlatList
                                data={ReportsFiles}
                                renderItem={renderItem1}
                            />
                        </View> 
                    </View>
                    )}


                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: normalize(14),
        padding: normalize(8),
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.textInputBorder,
        margin: normalize(10),
    },
    ArrowStyle: {
        marginTop: 5,
        width: 0, height: 0,
        borderLeftWidth: 15, borderBottomWidth: 20, borderRightWidth: 15,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: COLORS.white,
        elevation: 8,
    },
    container2: {
        width: COLORS.Width,
        backgroundColor: COLORS.white,
        elevation: 8,
        paddingVertical: normalize(10),
        borderTopLeftRadius: 25, borderTopRightRadius: 25,
    },
    straightLine: {
        alignSelf: 'center',
        marginHorizontal: normalize(5),
        borderWidth: 0.5,
        borderColor: COLORS.black,
        flex: 1,
        height: 0,
      },
})