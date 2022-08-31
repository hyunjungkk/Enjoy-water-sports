import React from 'react';
import { TouchableWithoutFeedback,Keyboard, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;
  
const styles = StyleSheet.create({
    tinyLogo: {
      width: 100,
      height: 100,
      marginVertical: 15,
      borderRadius: 70,
    },
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    title: {
      marginBottom: 20,
      fontSize: 18,
    },
    fixprofile: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 15,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    item: {
      marginVertical: 8,
      fontsize: 15,
    },
    sectiontitle: {
      fontsize: 15,
    },
    section_separator:{
      backgroundColor: '#e0e0e0',
      height: 1,
    }
  });
 
const Search_1 = ({navigation}) => {

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
                <Image style={styles.tinyLogo}
                    source={require('../images/leisure_fishing.jpg')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
            <Image style={styles.tinyLogo}
                source={require('../images/leisure_fishing.jpg')}
            />
            </TouchableOpacity >
        </View>
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
                <Image style={styles.tinyLogo}
                    source={require('../images/leisure_fishing.jpg')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
            <Image style={styles.tinyLogo}
                source={require('../images/leisure_fishing.jpg')}
            />
            </TouchableOpacity >
        </View>
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
                <Image style={styles.tinyLogo}
                    source={require('../images/leisure_fishing.jpg')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
            <Image style={styles.tinyLogo}
                source={require('../images/leisure_fishing.jpg')}
            />
            </TouchableOpacity >
        </View>
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
                <Image style={styles.tinyLogo}
                    source={require('../images/leisure_fishing.jpg')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2')}>
            <Image style={styles.tinyLogo}
                source={require('../images/leisure_fishing.jpg')}
            />
            </TouchableOpacity >
        </View>
        </KeyboardAwareScrollView>
    ); 
};


export default Search_1