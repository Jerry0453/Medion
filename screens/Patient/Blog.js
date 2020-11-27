import React, { useRef, useState } from 'react';
import {Button, Animated, View, Text, Image, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS, { normalize } from '../Constants/colorCode';
import BlogComponent1 from '../Components/BlogComponent1';
import BlogDetails from './BlogDetails';
const article = [
    {title: 'Unknown Disease', img: require('../images/sliderImage.png'), description: 'snbvs vbvjsbv vjsbvjkd sdvbskjdvb', date: '30 September, 2020', key: '1'},
    {title: 'Unknown problem', img: require('../images/sliderImage.png'), description: 'snbvs vbvjsbv vjsbvjkd sdvbskjdvb', date: '20 September, 2020', key: '2'},
    {title: 'Corona Disease', img: require('../images/sliderImage.png'), description: 'snbvs vbvjbvjkd sdvbskjdvb', date: '2 November, 2020', key: '3'},
];

const articletopic = [
    {title: 'All Blogs', key: '1'}, {title: 'স্বাস্থ্য পরামর্শ', key: '2'}, 
    {title: 'খাদ্য ও পুষ্টি', key: '3'}, {title: 'নারী স্বাস্থ্য', key: '4'},
    {title: 'শিশুর যত্ন', key: '5'}, {title: 'করোনা', key: '6'},
    {title: 'ফিটনেস', key: '7'}, {title: 'সৌন্দর্য চর্চা', key: '8'},
];

export default function Blog({navigation}) {
    const [selectedId, setSelectedId] = useState(null);
    const fadeAnim = useRef(new Animated.Value(-COLORS.Height)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 600,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: -COLORS.Height,
      duration: 600,
    }).start();
  };


    const renderItem = ({ item }) => (
        <BlogComponent1 navigation={navigation} item={item} screenName={BlogDetails}/>
    );

    const _renderItem = ({ item }) => {
        const backgroundColor = item.key === selectedId ? "#E7E7E7" : null;
        const color = item.key === selectedId ? '#fff' : COLORS.doctorListHeader;
        return (
            <TouchableOpacity style={[styles.TopicStyle, {backgroundColor}]} onPress={() => setSelectedId(item.key)}>
                <Text style={{color: COLORS.doctorListHeader, fontSize: normalize(15), fontWeight: 'bold'}}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View style={{flex: 1,backgroundColor: COLORS.DoctorAppnt_Background}}>
            
            
            <View style={{flex: 0.1, backgroundColor: COLORS.doctorListHeader, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingStart: normalize(15), paddingEnd: normalize(15), }}>
                    <AntDesign name="arrowleft" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <Text style={{fontSize: normalize(20), color: COLORS.white}}>Articles</Text>
                </View>
                <TouchableOpacity onPress={fadeIn} style={{paddingStart: normalize(15), paddingEnd: normalize(15),}}>
                    <AntDesign name="bars" size={30} color={COLORS.white} />
                </TouchableOpacity>
            </View>

            <View style={{flex: 0.9, alignItems: 'center'}}>
                <FlatList
                    data={articletopic}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={_renderItem}
                />
                <FlatList
                    data={article}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    fadingContainer: {
        right: 0,
        position: 'absolute',  
        backgroundColor: COLORS.DoctorAppnt_Background,
        alignItems: 'center',
        justifyContent: 'center',
      },
      TopicStyle: {
          padding: 20,
          paddingStart: 10, paddingEnd: 10,
          borderTopWidth: 0.8,
          borderColor: COLORS.doctorListHeader,
      }
});