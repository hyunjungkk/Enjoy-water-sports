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
import { withTheme } from 'styled-components';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  listItem: {
    paddingLeft:20,
    justifyContent:'center',
    justifyContent: 'center',
    alignItems: 'center',

  },

}

const Community = ({navigation}) => {

const Container = styled.View`
    flex : 1;
    background-color : ${({ theme }) => theme.background};
    padding : 30px;
    
`;


/*메거진 리스트 받아오기 */
let all_query="http://3.34.181.178/community/mz"

const [magazine,setmagazine]=useState('');
const axios_magazine= async ()=>{
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
    setmagazine(report.results)
  })
}
const Item = ({uri, id,title, writer, overview, create_at}) => (
 
    //<Image style={{width:'100%',resizeMode:'contain'}} source={{uri:img}}></Image>
  <TouchableOpacity onPress={()=>navigation.navigate('MZ', {ID:id, Uri:uri})}>
  <View style={{margin:20}}>
  <Image style={{resizeMode:'contain',height:250, margin: 15}} source={{uri}}/>
  <Text style={{color:"#595959", fontSize: 15, marginBottom:10}}>{"작가 : " + writer}</Text>
  <Text style={{fontWeight:"bold", fontSize: 18,marginBottom:20}}>{title}</Text>
  <Text style={{color:"#595959", fontSize: 15, marginBottom:10}}>{overview}</Text>
  
  <Text style={{color:"#595959", fontSize: 15, marginBottom:30}}>{create_at[0]+create_at[1]+create_at[2]+create_at[3]
                                                                + create_at[4]+ create_at[5]+create_at[6]+create_at[7]+create_at[8]+create_at[9]}</Text>
  </View>
  </TouchableOpacity>

);

const renderItem = ({ item }) => (
  <Item uri={item.thumbnail} id={item.id} title={item.title} writer={item.writer} overview={item.overview} create_at={item.create_at}/>
);

useEffect(() => {
  axios_magazine();
},[]);


return(
 
  <View style = {styles.container}>
  <View style = {styles.listItem}>
  <Text style={{marginLeft:20, marginBottom:30,marginTop:20, fontSize:22,fontWeight:
    'bold', color:'#595959'}}>
    MAGAZINE</Text>

  </View>
  
    <FlatList
      data = {magazine}
      renderItem = {renderItem}
      keyExtractor = {results => results.id}
      loop={true}
    />
  </View>
  );
};


export default Community