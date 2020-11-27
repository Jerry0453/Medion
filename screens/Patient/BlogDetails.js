import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS, { normalize } from '../Constants/colorCode';
import BlogArticles from '../Components/BlogComponent1';

const popularBlog = [
    {title: 'Unknown Disease', img: require('../images/sliderImage.png'), description: 'snbvs vbvjsbv vjsbvjkd sdvbskjdvb', date: '30 September, 2020', key: '1'},
    {title: 'Unknown problem', img: require('../images/sliderImage.png'), description: 'snbvs vbvjsbv vjsbvjkd sdvbskjdvb', date: '20 September, 2020', key: '2'},
    {title: 'Corona Disease', img: require('../images/sliderImage.png'), description: 'snbvs vbvjbvjkd sdvbskjdvb', date: '2 November, 2020', key: '3'},
];
export default function BlogDetails({navigation}) {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{alignSelf: 'center',padding: 10, flexDirection: 'row', width: COLORS.Width*0.9, borderWidth: 0.5, }}>
            <Image style={{height: 60, width: 60, marginRight: 20}} source={item.img} />
            <Text style={{color: '#19769F', fontSize: normalize(18), fontWeight: 'bold',}}>{item.title}</Text>
        </TouchableOpacity>
    );

    return(
        <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background}}>

            <ImageBackground style={{flex: 0.4}} source={require('../images/sliderImage.png')}>
                <TouchableOpacity style={{margin: 20}} onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={30} />
                </TouchableOpacity>
            </ImageBackground>

            <View style={{flex: 0.6, backgroundColor: '#fff'}}>
                <ScrollView>

                    <Text style={styles.titleStyle}>COVID-19 এর জন্ম চীনের ল্যাবে!</Text>
                    <Text style={styles.dateStyle}>20 November, 2020</Text>

                    <View style={{flexDirection: 'row', alignSelf: 'center', margin: 20}}>
                        <TouchableOpacity style={{marginRight: 10, borderColor: '#19769F', borderWidth: 2, padding: 15, borderRadius: 20, paddingTop: 5, paddingBottom: 5}}>
                            <Text style={{color: '#19769F'}}>Bookmark</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight: 10, borderColor: '#19769F', borderWidth: 2, padding: 15, borderRadius: 20, paddingTop: 5, paddingBottom: 5}}>
                            <Text style={{color: '#19769F'}}>Share</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.articleStyle}>নোবেলজয়ী ফরাসী ভাইরোলজিস্ট লুক মন্টেনিয়ার সম্প্রতি এক সাক্ষাৎকারে এমন টি ই দাবী করেছেন। তার মতে,কোভিড-১৯ ল্যাবেই তৈরি হয়েছে। AIDS প্রতিষেধক ভ্যাকসিন তৈরি করতে গিয়ে এই ভাইরাসের জন্ম। HIV- র গঠনের সাথে নোভেল করোনার প্রচুর মিল পাওয়া যায়। ম্যালেরিয়া জীবানুর সাথেও এর মিল পাওয়া যায়। যা বায়ো ইঞ্জিনিয়ারিং এই তৈরি সম্ভব। The Epoch Times এর দেয়া তথ্যমতে,করোনার জন্মবৃত্তান্ত ধামাচাপা দিতে জেনে বুঝে ভুল তথ্য প্রকাশ করছে চীন যাতে ভাইরাসের উৎস কেউ খুঁজে না পায়!</Text>
                    
                    <View style={{elevation: 4, width: COLORS.Width, borderWidth: 0.3, borderColor: '#444547', marginBottom: 10}} />

                    <View style={{marginBottom: 20}}>
                        <Text style={{marginLeft: 20,marginBottom: 20, fontSize: normalize(22), fontWeight: 'bold', color: COLORS.doctorListHeader}}>Popular Blogs</Text>
                        <FlatList
                            data={popularBlog}
                            renderItem={renderItem}
                        />
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        flex: 1,
        color: '#19769F',
        fontSize: normalize(20),
        fontWeight: 'bold',
        margin: 20,
        marginBottom: 0,
    },
    dateStyle: {
        color: '#444547', 
        fontSize: normalize(15),
        marginLeft: 20,
        marginBottom: 5,
    },
    articleStyle: {
        color: '#444547', 
        fontSize: normalize(17),
        marginLeft: 20,
        marginBottom: 25,
    }
});