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
        width: 160,
        height: 160,
        marginVertical: 7,
        marginHorizontal: 7,
        borderRadius: 5,
    },

  });

const Search_1 = ({navigation}) => {

    //1. 카약 카누
    //2. 요트
    //3. 스노쿨링
    //4. 민물낚시
    //5. 바다낚시
    //6. 수영
    //7. 래프팅
    //8. 서핑    
    
    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <View style={{marginTop:80}}></View>
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:'A03030200'})}>
                <Image style={styles.tinyLogo}
                    source={require('../images/search_img/1.png')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:'A03030300'})}>
            <Image style={styles.tinyLogo}
                source={require('../images/search_img/2.png')}
            />
            </TouchableOpacity >
        </View>
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:'A03030400'})}>
                <Image style={styles.tinyLogo}
                    source={require('../images/search_img/3.png')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:'A03030500'})}>
            <Image style={styles.tinyLogo}
                source={require('../images/search_img/4.png')}
            />
            </TouchableOpacity >
        </View>
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:'A03030600'})}>
                <Image style={styles.tinyLogo}
                    source={require('../images/search_img/5.png')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:'A03030700'})}>
            <Image style={styles.tinyLogo}
                source={require('../images/search_img/6.png')}
            />
            </TouchableOpacity >
        </View>
        <View style={styles.fixPic}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:'A03030800'})}>
                <Image style={styles.tinyLogo}
                    source={require('../images/search_img/7.png')}
                />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Search_2', {data:''})}>
            <Image style={styles.tinyLogo}
                    source={require('../images/search_img/8.png')}
            />
            </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
    ); 
};


export default Search_1