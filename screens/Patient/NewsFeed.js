import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AskQuestion from './AskQuestion';
import COLORS, { normalize } from '../Constants/colorCode';
import AnsweredList from '../Components/NewsfeedComponent1';
import ApprovedList from '../Components/NewsfeedComponent2';

const Answered = [
    {patient: 'Kishor Das', doctor: 'Dr. Md Makbul Hossain', date: '07-05-20 09:43:50pm', que: 'আমি কিশোর,বয়সঃ২৪,আমার প্রতি মাসে ৭-৮ দিন পর পর ঠোঁট,জিহ্বা,গাল এর ভিতরের অংশ কেটে যায় বা ঘা হয়,এর ফলে আমার প্রচুর কষ্ট হয়।এখন আমি কি করব।।?', ans: 'ধন্যবাদ আপনাকে। আপনার রোগের মেডিকেল পরিভাষায় নাম হল Aphthus Ulcer. এই রোগের মূল কারণ এখনও অজানা। তবে ধারনা করা হয় অতিরিক্ত মানসিক চাপে এটি হতে পারে।তাই আপনাকে চাপমুক্ত থাকার চেষ্টা করতে হবে।সাধারনত ৭---১০ দিন থাকতে পারে তারপর ভাল হয়ে যায়।ব্যথা হলে paracetamol tablet খেতে পারেন এবং apsol oral paste দিনে ৩/৪ বার আক্রান্তস্থানে লাগাতে পারেন।', key: '1'},
    {patient: 'Kishor Das', doctor: 'Dr. Md Makbul Hossain', date: '07-05-20 09:43:50pm', que: 'আমি কিশোর,বয়সঃ২৪,আমার প্রতি মাসে ৭-৮ দিন পর পর ঠোঁট,জিহ্বা,গাল এর ভিতরের অংশ কেটে যায় বা ঘা হয়,এর ফলে আমার প্রচুর কষ্ট হয়।এখন আমি কি করব।।?', ans: 'ধন্যবাদ আপনাকে। আপনার রোগের মেডিকেল পরিভাষায় নাম হল Aphthus Ulcer. এই রোগের মূল কারণ এখনও অজানা। তবে ধারনা করা হয় অতিরিক্ত মানসিক চাপে এটি হতে পারে।তাই আপনাকে চাপমুক্ত থাকার চেষ্টা করতে হবে।সাধারনত ৭---১০ দিন থাকতে পারে তারপর ভাল হয়ে যায়।ব্যথা হলে paracetamol tablet খেতে পারেন এবং apsol oral paste দিনে ৩/৪ বার আক্রান্তস্থানে লাগাতে পারেন।', key: '1'},
    {patient: 'Kishor Das', doctor: 'Dr. Md Makbul Hossain', date: '07-05-20 09:43:50pm', que: 'আমি কিশোর,বয়সঃ২৪,আমার প্রতি মাসে ৭-৮ দিন পর পর ঠোঁট,জিহ্বা,গাল এর ভিতরের অংশ কেটে যায় বা ঘা হয়,এর ফলে আমার প্রচুর কষ্ট হয়।এখন আমি কি করব।।?', ans: 'ধন্যবাদ আপনাকে। আপনার রোগের মেডিকেল পরিভাষায় নাম হল Aphthus Ulcer. এই রোগের মূল কারণ এখনও অজানা। তবে ধারনা করা হয় অতিরিক্ত মানসিক চাপে এটি হতে পারে।তাই আপনাকে চাপমুক্ত থাকার চেষ্টা করতে হবে।সাধারনত ৭---১০ দিন থাকতে পারে তারপর ভাল হয়ে যায়।ব্যথা হলে paracetamol tablet খেতে পারেন এবং apsol oral paste দিনে ৩/৪ বার আক্রান্তস্থানে লাগাতে পারেন।', key: '1'},
];

const Approved = [
    {name: "SAif Hasan", que: "আস্সালামু আলাইকুম স্যার। স্যার আমার বয়স ২৯, আমি গত ৬-৭ বছর ধরেই অনেক রোগে ভুগতেছি এবং অনেক ডাক্তারও দেখাইছি কিন্তু কিছুতেই শারীরিকভাবে ভালো অনুভব করতেছি না।আমার সমস্যাগুলো হচ্ছে গালের ভেতর, জিহ্বা,গলায় কয়েকদিন পরপরই ঘা হয় ভালো হয় আবার ঘা হয়।বুকের মাঝখানে সবসময় ব্যথা করে, মাঝে মধ্যে বুকের বাম পাশে খাওয়ার আগেও ব্যথা করে খাওয়ার পরেও ব্যথা করে, জ্বালাপোড়াও আছে।যেটা নিয়ে বেশি চিন্তিত সেটা হচ্ছে খালি পেটে কিছু খেলে খাওয়ার ৫-১০ মিনিট পর পেট থেকে গাঢ় ছাই রঙের লালা বের হয় এটা গত তিন বছর ধরে প্রায়।কোষ্টকাঠিন্য আছে, নিয়মিত মল ত্যাগ হয় না,মলে প্রচুর দুর্গন্ধ, পায়খানার রাস্তায় ব্যথা যন্ত্রণা হয় মাঝে মধ্যে,মাঝে মধ্যে হালকা রক্তও যা।সম্প্রতি যেটা নিয়ে বেশি চিন্তিত সেটা হচ্ছে গত চার মাসে কোনো ডায়েট ছাড়াই প্রায় ১৭-১৮ কেজি ওজন কমে গেছে।স্যার আমি কি করলে কোন ডাক্তার দেখালে ভালো হবে আপনার সুচিন্তিত মতামত দিয়ে উপকৃত করবেন।ধন্যবাদ স্যার।?", date: '06-05-20 11:01:18pm', key: '1'}
];

const Data = [
    {title: 'Approved', key: '1'},
    {title: 'Answered', key: '2'},
];

export default function NewsFeed({navigation}) {
    const [selectedId, setSelectedId] = useState('1');

    const renderItem = ({ item }) => {
        const backgroundColor = item.key === selectedId ? COLORS.doctorListHeader : "#fff";
        const color = item.key === selectedId ? "#fff" : COLORS.doctorListHeader;
        return (
          <TouchableOpacity style={{backgroundColor, padding: 10,paddingStart: 15, paddingEnd: 15, borderColor: COLORS.doctorListHeader, borderWidth: 2}} onPress={() => setSelectedId(item.key)}>
              <Text style={{color, fontSize: normalize(16)}}>{item.title}</Text>
          </TouchableOpacity>
        );
      };

    const renderItem1 = ({item}) => {
        return (
            <AnsweredList item={item} />
        )
    }

    const renderItem2 = ({item}) => {
        return (
            <ApprovedList item={item} />
        )
    }

    return(
        <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background}}>
            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <Text style={{fontSize: normalize(20), color: COLORS.white}}>News Feed</Text>
                </View>
            </View>

            <View style={{flex: 0.9, backgroundColor: '#fff', padding: 15}}>

                    <View style={{flexDirection: 'row', borderBottomWidth: 2, borderColor: COLORS.doctorListHeader}}>
                        <FlatList
                            data={Data}
                            horizontal={true}
                            renderItem={renderItem}
                        />
                    </View>
                <ScrollView>
                    {selectedId === '1' ? (
                        <FlatList
                            data={Answered}
                            style={{marginBottom: 10}}
                            renderItem={renderItem1}
                        />
                    ) : <FlatList
                            data={Approved}
                            style={{marginBottom: 10}}
                            renderItem={renderItem2}
                        />}
                    
                    <TouchableOpacity onPress={() => navigation.navigate(AskQuestion)} style={{flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center'}}>
                        <AntDesign name="arrowleft" size={20} color="#19769F" />
                        <Text style={{fontSize: normalize(15), color: '#19769F'}}>  Ask any question</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    
});