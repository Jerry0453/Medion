import  React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS, {normalize} from '../Constants/colorCode';
import Header from '../Components/HomepageCompt1';
import SliderComponent from '../Components/HomepageCompt2';
import CallingOption from '../Components/HomepageCompt3';
import Topics from '../Components/HomepageCompt4';
import DoctorList from './DoctorList';
import HealthCheckUp from './HealthCheckUp';
import Blog from './Blog';

export default function HomePage({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
    
      <View style={{flex: 0.1}}>
        <Header navigation={navigation} />
      </View>

      <View style={{flex: 0.9}}>
        <ScrollView>
          <View style={{height: Dimensions.get('window').height*0.3}}>
            <SliderComponent/>
          </View>

          <CallingOption />
          <Topics navigation={navigation} DoctorList={DoctorList} HealthCheckUp={HealthCheckUp}/>

          <View style={{height: Dimensions.get('window').height*0.5,marginTop: normalize(20)}}>
            <TouchableOpacity onPress={() => navigation.navigate(Blog)} style={styles.ViewBlogs}>
              <Text style={{color: 'blue', marginEnd: normalize(65)}}>View All Blog</Text>
              <View style={{borderRadius:20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#547896', width: 35,height: '100%'}}>
                <Entypo name="chevron-small-right" size={30} color={COLORS.white} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  ViewBlogs: {
    height: '10%',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: normalize(5),
    elevation: 8,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row' ,
  }
});
