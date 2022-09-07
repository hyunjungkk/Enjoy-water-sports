import React, {useState, useEffect} from 'react';
import { TouchableWithoutFeedback,Keyboard,ImageBackground,ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions,Linking } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Swiper from 'react-native-swiper/src';
import { FlatList, TouchableOpacity } from 'react-native';
import Hr from "react-native-hr-plus";
import axios from 'axios';

const { width } = Dimensions.get('window')

 
const styles = {
  wrapper: {
    
  },

  container: {
    padding: 30
  },
  
  slide: {
    justifyItems: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop : 20,
    marginBottom: 40
  },

  
  listItem: {
    borderRadius:2,
    paddingLeft:20,
    justifyItems: 'center',
    alignItems: 'center',
    marginTop:30,
    marginBottom:120
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

const MZ = ({route}) => {

const name=route.params.ID
const uri=route.params.Uri


const Container = styled.View`
    flex : 1;
    background-color : ${({ theme }) => theme.background};
    padding : 30px;
`;


/*메거진 디테일 받아오기 */
let all_query="http://3.34.181.178/community/mz/*"
all_query=all_query.replace('*',name)

const [mz,setmz]=useState('');
const axios_mz= async ()=>{
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
    setmz(report)
  })

}

useEffect(() => {
  axios_mz();
},[]);

const [num, setNum] = useState(0);
  
const onIncrease = () => {
  setNum(num + 1);
}

if (num%2===0) {
  iconname='bookmark-outline';
} else {
  iconname='bookmark';
  alert('북마크에 저장되었습니다.');
}

const [line, setLine] = useState(4);
const [isActivated, setIsActivated] = useState(false);

const handleLine = () => {
  isActivated ? setLine(4) : setLine(Number.MAX_SAFE_INTEGER);
  setIsActivated(prev => !prev);
}

return(
  <ScrollView>
  <View style = {styles.container}>
  
  <Text style={{marginLeft:20, fontSize:12,fontWeight:
    'bold', color:'#595959'}}>
    MAGAZINE</Text>
  <TouchableOpacity onPress={onIncrease} >
    <Icon name={iconname} size={25}  color='red' style={{margin:10, marginTop:30, justifyContent: "flex-end"}}/>
  </TouchableOpacity>
  <View style={{margin:20}}>
    <View style={styles.listItem}>
    <Text style={{fontWeight:"bold", fontSize: 25}}>{mz.title}</Text>
    </View>
    <Image style={{resizeMode:'contain',height:250, margin: 15, marginBottom:80}} source={{uri}}/>
    
    <Text style={{color:"#595959", fontSize: 15, marginBottom:10}}>{mz.overview}</Text>
    <Text style={{color:"#595959", fontSize: 15, marginBottom:50}}>{mz.content}</Text>
    <Text style={{color:"#595959", fontSize: 15, marginBottom:20}}>{"작가 : " + mz.writer}</Text>
    
    <Text style={{color:"#595959", fontSize: 15, marginBottom:30}}>{mz.create_at}</Text>

  </View>
  </View>
  </ScrollView>
  );
};


export default MZ