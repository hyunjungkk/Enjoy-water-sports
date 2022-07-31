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
    container: {
        flex: 1,
    },
    fixPic: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
    tinyLogo: {
        width: 150,
        height: 130,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },

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