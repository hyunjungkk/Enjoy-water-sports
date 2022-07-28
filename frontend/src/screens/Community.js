import React from 'react';
import { TouchableWithoutFeedback,Keyboard,ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { Image} from 'react-native';

import Swiper from 'react-native-swiper/src';
import { FlatList, TouchableOpacity } from 'react-native';
import Hr from "react-native-hr-plus";



const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
    
  },

  text: {
    color: '#D8D8D8'
  },
  
  slide: {
    justifyItems: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  image: {
    height: 160,
    width: 300,
    resizeMode: 'contain',
    marginTop:5,
    marginBottom:5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },

  listImage: {
    flexDirection:'row',
    borderRadius:15,
    marginBottom:30,
    marginTop:20,
    marginHorizontal:0,
  },
  listItem: {
    borderRadius:15,
    paddingHorizontal:15,
  }
}


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 13px;
`;

const message =[
  {"msg": "BTS를 좋아한다면? BTS가 다녀간 강릉 해변에 방문해보세요!"},
  {"msg": "해양쓰레기 첼린지! 지금 바로 참여해보세요 "}
]

const state =[
    {"id":1,"name":"찐 다이빙 스팟 추천","title":"오늘은 다이빙 스팟을 추천하려 합니다. 지난 번 스노쿨링스팟에 이어서 준비해봤습니다. 다이빙을 여러 곳 다녀봤…", 
    "picture":"uri","time":"29/10/2016"},
    {"id":2,"name":"바다거북이 마주친 범섬 스팟","title":"이번에 범섬으로 다이빙을 떠났는데, 너무나 운 좋게도 바다거북을 만났습니다. 사진도 찍었는데 공유드리고 갈게…"
    ,"picture":"url","time":"29/10/2016"},
    {"id":3,"name":"찐 다이빙 스팟 추천","title":"오늘은 다이빙 스팟을 추천하려 합니다. 지난 번 스노쿨링스팟에 이어서 준비해봤습니다. 다이빙을 여러 곳 다녀봤…"
    ,"picture":"url","time":"29/10/2016"},
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

const Community = ({navigation}) => {

    return (
            <Container>
                
                <Text style={{fontSize:21, color:'grey',flex:0.2}}>
                    <Text>Magazine</Text>
                </Text>
                
                <View style={{flex:1.4,width:440, paddingHorizontal: 15, marginBottom: -10}}>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide} >
                        <Image style={styles.image} source={require('../images/magazine1.png')} />
                        <Text style={{fontSize: 13,color: 'grey',marginTop:5, marginBottom:5}}>BTS를 좋아한다면? BTS가 다녀간 강릉 해변에 방문해보세요!</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../images/magazine2.png')} />
                        <Text style={{fontSize: 13,color: 'grey',marginTop:5, marginBottom:5}}>해양쓰레기 첼린지! 지금 바로 참여해보세요</Text>
                        
                        
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../images/magazine1.png')} />
                        <Text style={{fontSize: 13,color: 'grey',marginTop:5, marginBottom:5}}>BTS를 좋아한다면? BTS가 다녀간 강릉 해변에 방문해보세요!</Text>

                    </View>
                </Swiper>
                </View>
                  <Hr color="#B0AEAE" width={1} style={{flex: 0.1}}></Hr>                
                
                <View style={{flex: 2}}>
                    <FlatList
                    style ={{width: 350}}
            
                    data={state}
                    renderItem={({ item }) => (<Item item={item}/>)}
                    keyExtractor={item => item.id} 
                    />
                </View>
            </Container>


        /*
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback>
        <Container>
            <Button title = "community" />
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
        */
    );
};


export default Community