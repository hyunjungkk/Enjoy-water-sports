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
const access=route.params.access
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

      const [yn, setyn]=useState();
      let yn_query='http://3.34.181.178/community/bookmark?mz_id=*';
      yn_query=yn_query.replace('*',id)
      const scrap_yn=()=>{
        setroad(1)
        const config = {
          headers : {
            Authorization : `Bearer ${access}`,
            "Content-Type": "application/json",
          },
          transformRequest: (data, headers) => {
            return data;
          },
        }
        axios.get(
          yn_query,
          config
          )
          .then(function(response){
            const yorn=response.data.bookmarkYn
            setyn(yorn)
          })
          setroad(2)
      }

      const [iconname,seticonname]=useState('bookmark-outline')
      const [road,setroad]=useState(2)

      const bookmark_check=()=>{
        if (yn===false) {
         seticonname('bookmark-outline')
        } if(yn===true) {
          seticonname('bookmark')
        }
      }
      


  const scrap=()=>{
        setroad(1)
          const config = {
            headers : {
              Authorization : `Bearer ${access}`,
              "Content-Type": "application/json",
            },
            transformRequest: (data, headers) => {
              return data;
            },
          }

        const form_data = JSON.stringify({
          mz_id: String(id),
          title: String(title),
          thumbnail : String(uri),
          overview:mz_overview
        });
          //alert(result)
          axios.post(
            `${apiUrl}community/bookmark`,
            form_data,
            config
          )
            .then(function (response){
            const yorn=response.data.bookmarkYn
            setyn(yorn)
            });

            if (yn===false) {
              seticonname('bookmark-outline')
             } if(yn===true) {
               seticonname('bookmark')
             }
        setroad(2)
      }

    useEffect(()=>{
        scrap_yn();
    },[]);

    useEffect(()=>{
      return()=>{
        bookmark_check();
      }
    },[road])


return(
  <ScrollView>
  <View style = {styles.container}>
  
  <Text style={{marginLeft:20, fontSize:12,fontWeight:
    'bold', color:'#595959'}}>
    MAGAZINE</Text>
  <TouchableOpacity onPress={scrap}>
    {yn===true?
    <Icon name={'bookmark'} size={25}  color='red' style={{ margin:10, marginTop:30, alignContent:'flex-end'}}/>
    :
    <Icon name={'bookmark-outline'} size={25}  color='red' style={{ margin:10, marginTop:30, alignContent:'flex-end'}}/>
    }
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