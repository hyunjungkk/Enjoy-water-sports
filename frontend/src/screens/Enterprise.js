import React, {useState} from 'react';
import { TouchableWithoutFeedback,Keyboard,ImageBackground, FlatList  } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SwiperView from 'react-native-swiper-view';
import { Linking } from 'react-native';

const { width } = Dimensions.get('window');

const Kakao_map='kakaomap://place?id=7813433'

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const styles = {
  image: {
    width:width-20,
    height:250
  },
  listImage: {
    flexDirection:'row',
    borderRadius:15,
    marginBottom:30,
    marginTop:20,
    marginHorizontal:0,
  },
  text:{
      fontSize : 20,
      margin :15,
      fontWeight: "bold"
  },
  text1:{
      fontSize : 18,
      marginLeft:15,
      margin:5
  },
  text2:{
      fontSize : 12,
      marginLeft:15,
      margin:5,
      color:'#bfbfbf'
  },
  text3:{
      fontSize : 20,
      margin :15,
  },
  text4:{
    fontSize : 18,
    marginLeft:15,
    margin:5,
    marginRight:width-130
},
text5:{
    fontSize : 18,
    marginLeft:15,
    margin:5,
    marginRight:width-150
},
  title: {
    fontSize: 15,
  }
}

const cost='1시간 25,000 \n 2시간 40,000 \n 3시간 50,000';
const data='SA 국제서핑연맹 자격증 보유, KSL프로서퍼 강사와 함께하는 체계적이고 안전한 서핑커리큘럼 \n 내용 줄바꿈 확인용 \n 추가 되는 내용은  \n 스크롤뷰로 확인하려고 함 \n 몇줄까지 보여도 되는 건지?'

const state =[
    {"id":1,"name":"*****","title":"오늘은 다이빙 스팟을 추천하려 합니다. 지난 번 스노쿨링스팟에 이어서 준비해봤습니다. 다이빙을 여러 곳 다녀봤…", 
    "picture":"uri"},
    {"id":2,"name":"****","title":"이번에 범섬으로 다이빙을 떠났는데, 너무나 운 좋게도 바다거북을 만났습니다. 사진도 찍었는데 공유드리고 갈게…"
    ,"picture":"url"},
    {"id":3,"name":"*****","title":"오늘은 다이빙 스팟을 추천하려 합니다. 지난 번 스노쿨링스팟에 이어서 준비해봤습니다. 다이빙을 여러 곳 다녀봤…"
    ,"picture":"url"},
  ];

  function Item({ item }) {
    return (
      <View style={styles.listImage}>
        <Image source={require('../images/magazine_user.png')}  style={{width:50, height:50,borderRadius:30}} />
        <View style={styles.listItem}>
            <Text style={{color:"grey", fontWeight:"bold", marginBottom:15}}>{item.name}</Text>
            <Text style={{color:"grey", marginRight:50, fontSize: 14}}>{item.title}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"green"}}></Text>
        </TouchableOpacity>
      </View>
    );
  }


const Enterprise = () => {

    return (
        <ScrollView>
            <Container>
            <View style={{flexDirection: 'row', flex:0.5, alignItems:'flex-start'}}>
                    <Text style={{fontSize:20, margin:10, marginTop:30, marginRight:width/2-20}}>중문 해수욕장</Text>
                </View>
            <View style={{flexDirection: 'row', flex:0.5, alignItems:'flex-start'}}>
                <Text style={styles.text1}> 위치 정보 </Text>
                <TouchableOpacity onPress={()=>Linking.openURL(Kakao_map)}>
                    <Text style={{marginLeft:width-250, marginTop:10, marginBottom:10, backgroundColor:'#b8b4ad',color:'#ffffff',fontSize:17}}>카카오맵에서 보기</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.image} source={require('../images/spot_1_ocean.jpg')} />
            <View style={{flexDirection: 'row', flex:1, justifyContent:'space-around', paddingTop:15}}>
                <Text style={styles.text1}>가격 정보</Text>
                <View style={{paddingLeft:width-450,paddingRight:width/2-20}}>
                <Text style={styles.text2}>{cost}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-start', paddingTop:15}}>
                <Text style={styles.text4}>이용 안내</Text>
                <ScrollView style={{flex:0.5}}>
                    <Text>{data}</Text>
                </ScrollView>
            </View>
            <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-start', paddingTop:15}}>
                <Text style={styles.text5}>생생한 후기</Text>
            </View>
            <View style={{flexDirection: 'row', flex:1, justifyContent:'space-around', paddingTop:15}}>
            <FlatList
                    style ={{width: 350}}
                    data={state}
                    renderItem={({ item }) => (<Item item={item}/>)}
                    keyExtractor={item => item.id} 
                    />
            </View>
            </Container>
        </ScrollView>
    );
};


export default Enterprise