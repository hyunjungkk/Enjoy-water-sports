import React, {useState, useEffect} from 'react';
import { TouchableWithoutFeedback,Keyboard,ImageBackground,ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions,Linking } from 'react-native';
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
item: {
  backgroundColor: '#6da7ed',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},

}

const Ranking = ({navigation,route}) => {

const Container = styled.View`
    flex : 1;
    background-color : ${({ theme }) => theme.background};
    padding : 30px;
`;
const name=route.params.ID


/*랭킹 받아오기 */
let all_query="http://3.34.181.178/tourapi/rank/?rank=@"
all_query=all_query.replace('@',name)

const [rank,setranking]=useState('');
const axios_rank= async ()=>{
  const access = ''
  const config = {
    headers : {
      Authorization : `Bearer ${access}`,
    }
  }
  axios.get(all_query)
  .then(function (response) {
    const valor = JSON.stringify(response.data)
    const report=JSON.parse(valor)
    setranking(report.response.body.items.item)
  })

}

const Item = ({title, img, typeid, contentid,index,readcount}) => (

  <TouchableOpacity onPress={()=> navigation.navigate('Enterprise',{typeid:typeid, conid:contentid, title:title,img:img})}>

  <View style={styles.listImage}>
  
  <View style={styles.listItem}>
  
  <Text style={{marginRight:20, color:"#595959", fontWeight:"bold", fontSize: 18}}>{index}</Text>
  
  </View>
  <Image style={{width:150,height:140}} source={{uri:img}}></Image>
  
  <View style={styles.listItem}>
  <Text style={{color:"#595959", fontWeight:"bold", fontSize: 20,marginBottom:7}}>{title}</Text>
  <Text style={{color:"#595959", fontSize: 15}}>{"조회수  " + readcount}</Text>

  </View>

  </View>
  </TouchableOpacity>
  
);

const renderItem = ({ item }) => (
  <Item title={item.title} img={item.firstimage} typeid={item.contenttypeid} contentid={item.contentid}
  index={item.index} readcount={item.readcount}/>
);

useEffect(() => {
  axios_rank();
},[]);


return(
  <View style = {styles.container}>
  <View>
  <TouchableOpacity onPress={()=>Linking.openURL(`http://www.seamudexpo.or.kr/vr.php`)}>
    <Image source={require('../images/ranking_cardnews.jpg')} style={{width:'100%', height:140, marginTop:20, marginBottom:30}}/>
  </TouchableOpacity>
  <Text style={{marginLeft:20, marginBottom:10, fontSize:22,fontWeight:
    'bold', color:'#595959'}}>
    위클리 인기 TOP</Text>
  <Text style={{marginLeft:20, marginBottom:20, fontSize:15, color:'#595959'}}>
    <Text>최근 1주간 조회수가 가장 높았어요</Text>
  </Text>
  </View>
    <FlatList
      data = {rank}
      renderItem = {renderItem}
      keyExtractor = {item => item.id}
      loop={true}

      
      //renderItem = {({item}) => <Text style={styles.item}>{item.addr1}</Text>}
    />
  </View>
  );
};


export default Ranking