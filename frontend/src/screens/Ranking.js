import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

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
    marginTop : 20,
    marginBottom: 40
  },

  listImage: {
    flexDirection:'row',
    marginBottom:50,
    marginTop:20,
  },

  
  listItem: {
    borderRadius:2,
    paddingLeft:20,
    justifyContent:'center',

  },

  image: {
    width: 360,
    height: 150,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
/*
  listItem: {
    height: 90,
    justifyContent:'center',
    alignItems:'center'
  }
  */
}

const Ranking = ({navigation, route}) => {

const Container = styled.View`
    flex : 1;
    background-color : ${({ theme }) => theme.background};
    padding : 30px;
`;




  let query= "http://3.34.181.178/tourapi/rank/?rank=래프팅"

  
  const [address,setaddress]=useState('');
  const [title,settitle]=useState('');
  const [uri,setpicture]=useState('');
  

  const axiostest= async ()=>{
    const access = ''
    }
    axios.get(query)
    .then(function (response) {
      const valor = JSON.stringify(response.data)
      const report=JSON.parse(valor)
      const add_axios=report.response.body.items.item[0].addr1
      const title_axios=report.response.body.items.item[0].title
      const picture_axios = report.response.body.items.item[0].firstimage
      setaddress(add_axios)
      settitle(title_axios)
      setpicture(picture_axios)
      
    })
  
    const state = [
      {id: '1. ', component: <FlatList data={address} renderItem={renderItem} keyExtractor={item => item.id}/>},
      { id: '2. ', component: <FlatList data={title} renderItem={renderItem} keyExtractor={item => item.id}/> },
      { id: '3. ', component: <FlatList data={uri} renderItem={renderItem} keyExtractor={item => item.id}/> },
    ];
    
    function Ranking_Item({ item }) {
      return (
        <View style={styles.listImage}>
        <Image source={{uri}}  style={{width:120, height:120}} />
        <View style={styles.listItem}>
            <Text style={{color:"#595959", fontWeight:"bold", fontSize: 18, marginBottom:5}}>{title}</Text>
            <Text style={{color:"grey", marginRight:50, fontSize: 16}}>{address}</Text>
        </View>
        <Hr color="#B0AEAE" width={1} style={{marginTop: 30}}></Hr>                
      </View>
      );
    }
    const renderItem = ({ item }) => (
      <Item title={item.title}/>
    );
    

    return (
            <Container>
              <View>
                <Image source={require('../images/ranking_cardnews.jpg')}
                style={{marginLeft: -30, marginTop: 20, marginBottom:30, width: 440, height: 140}} />
              </View>
                    <Text style={{marginTop:10, marginBottom:5, fontWeight: 'bold',fontSize:21,color: "#3b3b3b"}}>
                    <Text>위클리 인기 TOP </Text>
                </Text>
                <Text style={{ marginBottom:20,fontSize:14, color:"#595959"}}>
                  <Text>최근 1주간 조회수가 가장 높았어요</Text>
                </Text>

                <View style={{flex: 2.3}}>
                    <FlatList
                    style ={{width: 350}}
                    data={state}
                    renderItem={({ item }) => (<Ranking_Item item={item}/>)}
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


export default Ranking