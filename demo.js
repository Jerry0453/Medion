import React, { useState } from "react";
import { View, Picker, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


export default function App() {
  const [selectedValue, setSelectedValue] = useState("English");
  const [isVisible, setIsVisible] = useState(false);

  ShowHideComponent = () => {
    if (isVisible === false) {
      setIsVisible(true);
    }
  };

  const EnglishLan = () => {
      setSelectedValue("English");
      setIsVisible(false);
  };
  
  const BanglaLan = () => {
    setSelectedValue("Bangla");
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
    {isVisible ? (
          <View style={styles.options}>
              <TouchableOpacity style={{flex: 1, borderBottomWidth:0.5}} onPress={EnglishLan}>
                  <Text>English</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, borderTopWidth:0.5}} onPress={BanglaLan}>
                  <Text>Bangla</Text>
              </TouchableOpacity>
          </View>
        ) : null}
        <TouchableOpacity style={styles.picker} onPress={ShowHideComponent}>
            <Text style={styles.textStyle}>{selectedValue}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
      height: 40,
      width: 100,
      backgroundColor: '#547896',
      alignItems: 'center',
      justifyContent: 'center',
  },
  textStyle: {
      fontSize: 16,
      color: 'white',
  },
  options: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    elevation: 6,
  }
});
