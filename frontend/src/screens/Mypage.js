import React from 'react';
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, navigation, StyleSheet, View, Button, SafeAreaView, Text, Alert, Image, FlatList, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from '../context/UserContext';
import { Link } from '@react-navigation/native';
import { Linking } from 'react-native';

const fsainit = require('../images/magazine_user.png')
const fsauser = require('../images/me.svg')

const Container = styled.View`
    flex : 1;
    padding : 20px;
`;

const Separator = () => (
    <View style={styles.separator} />
  );
/*
const DATA = [
    {
      title: "더보기",
      data: ["공지사항", "약관 및 동의 내용", "앱 버전"]
    },
];  

const Item = ({ title }) => (
  <TouchableOpacity onPress={()=>Alert.alert('이동')}>
    <View style={styles.item}>
      <Text fontSize={30} >{title}</Text>
    </View>
  </TouchableOpacity>
  );
  */

const Mypage = ({navigation}) => {
    const data = useContext(UserContext);
    const [nickname, SetNickName] =  useState('')
      useEffect(()=>{
        if(data.userdata) {
         // alert(data.userdata)

          AsyncStorage.getItem('nickname', (err, result) => {
            SetNickName(result)
          });
        }
    },[data.userdata]);

    const goLists = (option) => {
      if(data.userdata) {
       // alert(option)
         navigation.navigate(option)
      }
      else {
        alert("먼저 로그인해주세요!")
      }
    }
 

    return (
        <TouchableWithoutFeedback>
        <Container>
            <View style={styles.fixprofile}> 
            <Image 
                style={styles.tinyLogo}
                source={fsainit}
            />
            </View>
            <View style={styles.fixprofile}> 
             {nickname? <Text style={styles.title}> {nickname} </Text>:<Text  style={styles.title}>로그인이 필요해요!</Text>}
            </View>
            <Separator/>
            <View style={styles.fixToText}>
                <Button
                title="하트찜"
                onPress={()=>goLists('Like_list')}
                />
                
                <Button
                title="스크랩"
                onPress={()=>goLists('Scrap_list')}
                />
            </View>
            <Separator/>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={()=>Alert.alert('준비중입니다.')}>
                  <Text style={{marginTop:20,marginBottom:30}}>공지사항</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Linking.openURL('http://3.34.181.178/privacy_policy')}>
                  <Text style={{marginBottom:30}}>약관 및 동의 내용</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Alert.alert('새로운 기능','사랑해 1.0.9 업데이트')}>
                  <Text style={{marginBottom:20}}>앱 버전</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </Container>
        </TouchableWithoutFeedback>
    );
};


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
      justifyContent: 'space-evenly',
    },
    separator: {
      marginVertical: 15,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    item: {
      marginVertical: 12,
      fontsize: 20,

    },
    sectiontitle: {
      fontsize: 25,
    },
    section_separator:{
      backgroundColor: '#e0e0e0',
      height: 1,
    }
  });

export default Mypage