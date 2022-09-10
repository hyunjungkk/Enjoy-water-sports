import React, {useState, useEffect} from 'react';
import { TouchableWithoutFeedback,Keyboard,ImageBackground,ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions,Linking } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import AsyncStorage from "@react-native-async-storage/async-storage";


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

const MZ = ({navigation, route}) => {

const id=route.params.ID //id
const title = route.params.Title//title
const uri=route.params.Uri //thumbnail
const overview = route.params.Overview //overview
const create_at = route.params.Create_at //create_at
const typeid=route.params.Typeid

const Container = styled.View`
    flex : 1;
    background-color : ${({ theme }) => theme.background};
    padding : 30px;
`;


  /*메거진 디테일 받아오기 */
  let mz_query="http://3.34.181.178/community/mz/*"
  mz_query=mz_query.replace('*',id)
  
  const [mz,setmz]=useState('');
  const axios_mz= async ()=>{
  const access = ''
  const config = {
    headers : {
      Authorization : `Bearer ${access}`,
    }
  }
  axios.get(mz_query,config)
  .then(function (response) {
    const valor = JSON.stringify(response.data)
    const report=JSON.parse(valor)
    setmz(report)
  })
}

  useEffect(() => {
    axios_mz();
  },[]);


  const apiUrl = 'http://3.34.181.178/'


  let scrap_query='http://3.34.181.178/community/bookmark/?mz_id=*&title=#&thumbnail=@&overview=^  '
  let mz_overview =overview.substring(0,15)

  scrap_query=scrap_query.replace('*',id)
  scrap_query=scrap_query.replace('#',title)
  scrap_query=scrap_query.replace('@',uri)
  scrap_query=scrap_query.replace('^',mz_overview) 


    //alert(scrap_query)
    const data = useContext(UserContext)
    //alert(data.userdata)
    const [access,setjwt]=useState('')
      
     /*     
  useEffect(()=>{
    
    data.setUserdata(true); //로그인 여부 세팅
    //alert(data.userdata)
    
    if(data.userdata){
      //alert("userdata")
      
      AsyncStorage.getItem('access_token', (err, result) => {
      alert(result)
      setjwt(result)}); 
    }
  },[]);
  */
      const scrap=()=>{

        AsyncStorage.getItem('access_token', (err, result) => {
          const config = {
            headers : {
              Authorization : `Bearer ${result}`,
            }
          }


        const form_data = {
          mz_id: String(id),
          title: String(title),
          thumbnail : String(uri),
          overview:mz_overview
        };

          //alert(result)
          axios.post(
            `${apiUrl}community/bookmark`,
            form_data,
            config
          )
            .then(function (response) {
              // response  
              if(response) {
                if(response.data.count > 0) {
                  setDATA(response.data.results)
                }
              }
              else {
              
              }
          }).catch(function (error) {
              // 오류발생시 실행
              alert(error)
          }).then(function() {
              // 항상 실행
          });
        })
        
      }
    /*
      const bookyn=()=>{
        let bookYn_query="http://3.34.181.178/community/bookmark?mz_id=*"
        bookYn_query=bookYn_query.replace('*',id)


        AsyncStorage.getItem('access_token', (err, result) => {
          const config = {
            headers : {
              Authorization : `Bearer ${result}`,
            }
          }

          axios.get(bookYn_query,config)
          .then(function (response) {
            
            const valor = JSON.stringify(response.data)
            const report=JSON.parse(valor)
            alert(report)
          }).catch(function (error) {
              // 오류발생시 실행
              alert(error)
          }).then(function() {
              // 항상 실행
          });
        })
        
      }
      */

    
    ///////////////////////////
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

  

  

  
//bookmark 작동
/*
const [num, setNum] = useState(0);
  
const onIncrease = () => {
  setNum(num + 1);
}

if (num%2===0) { //scrap 비활성화시
  iconname='bookmark-outline';

} else { //scrap 활성화시
  iconname='bookmark';


  //bookmark 연동

  const axios_Scrap= async ()=>{
  const access = ''
  const config = {
    headers : {
      Authorization : `Bearer ${access}`,
    }
  }
  useEffect(() => {
    axios_Scrap(); //srap 저장
  },[]);

  alert("scrap_query post axios start")

  axios.post(scrap_query,config) //scrap post
  .then(function (response) {
    alert("scrap_query post axios start")
    
    if(response) {
      if(response.data.count > 0) {
        alert("response start")
        alert(response.message) // message 출력
      
        useEffect(() => {
          axios_Scrap(); //srap 저장
        },[]);
        
      }
    }
    else {

    }
    }).catch(function (error) {
        // 오류발생시 실행
        alert(error)
    }).then(function() {
        // 항상 실행
    
  })
  }

  alert('북마크에 저장되었습니다.');
}
*/


return(
  <ScrollView>
  <View style = {styles.container}>
  
  <Text style={{marginLeft:20, fontSize:12,fontWeight:
    'bold', color:'#595959'}}>
    MAGAZINE</Text>
  <TouchableOpacity onPress={onIncrease} >
    <Icon name={iconname} size={25}  color='red' style={{margin:10, marginTop:30, justifyContent: "flex-end"} } onPress={scrap()}/>
  </TouchableOpacity>
  <View style={{margin:20}}>
    <View style={styles.listItem}>
    <Text style={{fontWeight:"bold", fontSize: 25}}>{mz.title}</Text>
    </View>
    <Image style={{resizeMode:'contain',height:250, margin: 15, marginBottom:80}} source={{uri}}/>
    
    <Text style={{color:"#595959", fontSize: 15, marginBottom:10}}>{mz.overview}</Text>
    <Text style={{color:"#595959", fontSize: 15, marginBottom:50}}>{mz.content}</Text>
    <Text style={{color:"#595959", fontSize: 15, marginBottom:20}}>{"작가 : " + mz.writer}</Text>
      
    <Text style={{color:"#595959", fontSize: 15, marginBottom:30}}>{create_at}</Text>

  </View>
  </View>
  </ScrollView>
  );
};


export default MZ;